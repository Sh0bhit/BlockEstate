const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("RealEstate", async () => {
  let Broker, brokerContract;
  let buyer, seller;

  beforeEach(async () => {
    Broker = await ethers.getContractFactory("Broker");
    brokerContract = await Broker.deploy(
      "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
    );
    [buyer, seller] = await ethers.getSigners();
    await brokerContract.deployed();
  });

  it("Deploy and constructor test", async () => {
    owner = await brokerContract.owner();
    console.log("Contract Deployed owner is:", owner);
    expect(owner.toLowerCase()).to.be.equal(
      "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
    );
  });

  describe("Listing Properties", async () => {
    beforeEach(async () => {
      const list = await brokerContract
        .connect(seller)
        .listProperties(tokens(10));
      await list.wait();
    });

    it("Address", async () => {
      const property = await brokerContract.property(1);
      expect(property[0]).to.be.equal(seller.address);
    });

    it("Listing Cost", async () => {
      const property = await brokerContract.property(1);
      expect(property[1].toString()).to.be.equal(tokens(10));
    });
  });

  describe("Buying Properties", async () => {
    beforeEach(async () => {
      const list = await brokerContract
        .connect(seller)
        .listProperties(tokens(10));
      await list.wait();
    });

    it("Transfer Money to seller", async () => {
      const beforeSeller = await seller.getBalance();
      const buy = await brokerContract.connect(buyer).buyProperties(1, {
        value: tokens(11),
      });
      await buy.wait();
      const afterSeller = await seller.getBalance();
      expect(afterSeller).to.be.greaterThan(beforeSeller);
    });

    it("Comission In wallet", async () => {
      const buy = await brokerContract.connect(buyer).buyProperties(1, {
        value: tokens(11),
      });
      await buy.wait();
      wallet = await brokerContract.getBalance();
      expect(wallet).to.be.equal(tokens(1.5));
    });

    it("ownership transfer", async () => {
      const buy = await brokerContract.connect(buyer).buyProperties(1, {
        value: tokens(11),
      });
      await buy.wait();
      const property = await brokerContract.property(1);
      expect(property[0]).to.be.equal(buyer.address);
    });
  });
});

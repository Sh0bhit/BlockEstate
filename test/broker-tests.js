const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("RealEstate", () => {
  let RealEstate, contract, Broker, brokerContract;
  let buyer, seller, inspector, lender;

  beforeEach(async () => {
    RealEstate = await ethers.getContractFactory("RealEstate");
    contract = await RealEstate.deploy();
    [buyer, seller, inspector, lender] = await ethers.getSigners();
    let transaction = await contract.connect(seller).mint("./1.json");
    await transaction.wait();

    Broker = await ethers.getContractFactory("Broker");
    brokerContract = await Broker.deploy(
      lender.address,
      inspector.address,
      seller.address,
      contract.address
    );

    await brokerContract.deployed();

    transaction = await contract
      .connect(seller)
      .approve(brokerContract.address, 1);
    await transaction.wait();

    transaction = await brokerContract
      .connect(seller)
      .list(1, tokens(10), tokens(5), buyer.address);
    await transaction.wait();
  });

  describe("deployement", () => {
    it("saves the address", async () => {
      console.log(contract.address);
    });

    it("Returns NFT address", async () => {
      const result = await brokerContract.nftAddress();
      expect(result).to.be.equal(contract.address);
    });

    it("Returns lender", async () => {
      const result = await brokerContract.lender();
      expect(result).to.be.equal(lender.address);
    });

    it("Returns inspector", async () => {
      const result = await brokerContract.inspector();
      expect(result).to.be.equal(inspector.address);
    });

    it("Returns Seller", async () => {
      const result = await brokerContract.seller();
      expect(result).to.be.equal(seller.address);
    });
  });

  describe("Listing", () => {
    it("Updates as Listed", async () => {
      const result = await brokerContract.isListed(1);
      expect(result).to.be.equal(true);
    });

    it("Updates the ownership", async () => {
      expect(await contract.ownerOf(1)).to.be.equal(brokerContract.address);
    });

    it("Returns Buyer", async () => {
      const result = await brokerContract.buyer(1);
      expect(result).to.be.equal(buyer.address);
    });

    it("Returns Purchase Price", async () => {
      const result = await brokerContract.purchasePrice(1);
      expect(result).to.be.equal(tokens(10));
    });

    it("Returns broker amount", async () => {
      const result = await brokerContract.brokerAmount(1);
      expect(result).to.be.equal(tokens(5));
    });

    // it("Only seller can list", async () => {
    //   const result = await brokerContract.seller();
    //   expect(result).to.be.equal(seller.address);
    // });
  });

  describe("Deposits", () => {
    it("Balance get updated", async () => {
      const transaction = await brokerContract
        .connect(buyer)
        .depositEarnest(1, { value: tokens(5) });
      await transaction.wait();
      const result = await brokerContract.getBalance();
      expect(result).to.be.equal(tokens(5));
    });
  });

  describe("Inspection", () => {
    it("Inspection bool gets updated", async () => {
      const transaction = await brokerContract
        .connect(inspector)
        .updateInspectionStatus(1, true);
      await transaction.wait();
      const result = await brokerContract.inspectionPassed(1);
      expect(result).to.be.equal(true);
    });
  });

  describe("Approval", () => {
    it("Approval status updated", async () => {
      const transactionBuyer = await brokerContract
        .connect(buyer)
        .approveSale(1);
      await transactionBuyer.wait();

      const transactionSeller = await brokerContract
        .connect(seller)
        .approveSale(1);
      await transactionSeller.wait();

      const transactionLender = await brokerContract
        .connect(lender)
        .approveSale(1);
      await transactionLender.wait();

      expect(await brokerContract.approval(1, buyer.address)).to.be.equal(true);
      expect(await brokerContract.approval(1, seller.address)).to.be.equal(
        true
      );
      expect(await brokerContract.approval(1, lender.address)).to.be.equal(
        true
      );
    });
  });

  describe("Sale", async () => {
    beforeEach(async () => {
      const transactionDeposit = await brokerContract
        .connect(buyer)
        .depositEarnest(1, { value: tokens(5) });
      await transactionDeposit.wait();

      const transactionInspector = await brokerContract
        .connect(inspector)
        .updateInspectionStatus(1, true);
      await transactionInspector.wait();

      const transactionBuyer = await brokerContract
        .connect(buyer)
        .approveSale(1);
      await transactionBuyer.wait();

      const transactionSeller = await brokerContract
        .connect(seller)
        .approveSale(1);
      await transactionSeller.wait();

      const transactionLender = await brokerContract
        .connect(lender)
        .approveSale(1);
      await transactionLender.wait();

      await lender.sendTransaction({
        to: brokerContract.address,
        value: tokens(5),
      });

      const finalize = await brokerContract.connect(seller).finalizeSale(1);
      await finalize.wait();
    });
    it("Updates Balance", async () => {
      expect(await brokerContract.getBalance()).to.be.equal(0);
    });
    it("Updates Ownership", async () => {
      expect(await contract.ownerOf(1)).to.be.equal(buyer.address);
    });
  });

  // describe("Cancel sale", async () => {
  //   beforeEach(async () => {
  //     const cancel = await brokerContract.cancelSale(1);
  //     await cancel.wait();
  //   });
  //   it("Cancel sale", async () => {
  //     const inspectionPassed = brokerContract
  //       .connect(inspector)
  //       .inspectionPassed(1, false);
  //     await inspectionPassed.wait();

  //     await lender.sendTransaction({
  //       to: brokerContract.address,
  //       value: tokens(5),
  //     });

  //   });
  // });
});

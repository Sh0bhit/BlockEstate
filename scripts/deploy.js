// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

async function main() {
  let RealEstate, contract, Broker, brokerContract;
  let buyer, seller, inspector, lender;

  [buyer, seller, inspector, lender] = await ethers.getSigners();
  RealEstate = await ethers.getContractFactory("RealEstate");
  contract = await RealEstate.deploy();

  console.log(`Deployed Contract at ${contract.address}`);

  console.log("Minting");

  for (let i = 0; i < 3; i++) {
    const transaction = await contract
      .connect(seller)
      .mint(
        `https://ipfs.io/ipfs/QmQVcpsjrA6cr1iJjZAodYwmPekYgbnXGo4DFubJiLc2EB/${
          i + 1
        }.json`
      );
    await transaction.wait();
  }

  Broker = await ethers.getContractFactory("Broker");
  brokerContract = await Broker.deploy(
    lender.address,
    inspector.address,
    seller.address,
    contract.address
  );

  await brokerContract.deployed();

  console.log(`Deployed broker Contract at ${brokerContract.address}`);

  for (let i = 0; i < 3; i++) {
    const transaction = await contract
      .connect(seller)
      .approve(brokerContract.address, i + 1);
    await transaction.wait();
  }

  for (let i = 0; i < 3; i++) {
    transaction = await brokerContract
      .connect(seller)
      .list(i + 1, tokens(10), tokens(5), buyer.address);
    await transaction.wait();
  }

  console.log("Finished");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

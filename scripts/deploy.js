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
  let Broker, brokerContract, RealEstate, realEstateContract;

  Broker = await ethers.getContractFactory("Broker");
  brokerContract = await Broker.deploy();

  await brokerContract.deployed();
  console.log("Deployed Broker Contract At", brokerContract.address);

  RealEstate = await ethers.getContractFactory("RealEstate");
  realEstateContract = await RealEstate.deploy(brokerContract.address);
  await realEstateContract.deployed();
  console.log(`Deployed Main Contract at ${realEstateContract.address}`);

  if (
    network.config.chainId === 11155111 &&
    process.env.REACT_APP_ETHERSCAN_API_KEY
  ) {
    await brokerContract.deployTransaction.wait(6);
    await verify(brokerContract.address, []);
    await realEstateContract.deployTransaction.wait(6);
    await verify(realEstateContract.address, [brokerContract.address]);
  }
}

async function verify(contractAddress, args) {
  console.log("verifying ......");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("Already verified")) {
      console.log("Already verified");
    } else {
      console.log(e);
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

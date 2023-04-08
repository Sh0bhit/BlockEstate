require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      allowUnlimitedContractSize: true,
      gas: 2100000,
      gasPrice: 8000000000,
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545/",
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },
    polygonTest: {
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      accounts: [
        "f224e47e7d572bec3b6df3cb380feaec018e40c2924ef7d39f9f1c6725a96da3",
      ],
      allowUnlimitedContractSize: true,
    },
  },
};

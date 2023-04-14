require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545/",
      chainId: 1337,
      accounts: [
        "03e636f06cc29bcae0d6aad74fe8e3af2f419421cf66add6a578655818a73094",
      ],
    },
    sepolia: {
      url: "https://rpc.sepolia.org/",
      chainId: 11155111,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_API_KEY,
  },
};

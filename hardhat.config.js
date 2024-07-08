// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
      saveDeployments: true,
    },
  },
  solidity: {
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      // viaIR: true,
    },

    compilers: [
      {
        version: "0.8.21",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_VERIFY_KEY,
    },
  },
};

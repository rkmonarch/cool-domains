require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://ultra-broken-valley.matic-testnet.discover.quiknode.pro/a05691b265c12ab2d8202b9d181707d6b00eff73/",
      accounts: ["a640fabb998090c3f4aebcb3fc36021c86b206b8e38d324854f518bd7dc33711"],
    }
  }
};

const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "14dc6b8fa59640bcb72d9e43e027f0c3";
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000
    }
  }
};
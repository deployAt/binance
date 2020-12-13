// https://testnet.bscscan.com/address/0xE7F9CfcE9Ab690073c31b0EfAbFe9F9f7c458339
// https://testnet.binance.org/faucet-smart
// truffle migrate --reset --network binance
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

const { PRIVATE_KEY } = process.env

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      skipDryRun: true,
    },
    binance: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [PRIVATE_KEY],
          providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        }),
      network_id: '97',
      gas: 1000000,
    },
  },
  compilers: {
    solc: {
      version: '0.7.4',
      optimizer: {
        enabled: false,
        runs: 200,
      },
    },
  },
}

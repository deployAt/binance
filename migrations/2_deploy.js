const BContract = artifacts.require('BContract')

module.exports = function (deployer) {
  deployer.deploy(BContract)
}

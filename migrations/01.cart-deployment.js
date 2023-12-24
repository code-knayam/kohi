const cart = artifacts.require("Cart");

module.exports = function (deployer, network, accounts) {
	deployer.deploy(cart, accounts[0]);
};

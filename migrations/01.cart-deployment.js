const CartSale = artifacts.require("CartSale");

module.exports = function (deployer, network, accounts) {
	deployer.deploy(CartSale);
};

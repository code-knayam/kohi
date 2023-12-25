// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract CartSale {
    address public sellerAccount = 0x8771B888Fe2486F3a2874703cb09f245a3e4f3e0;

    event TransactionComplete(
        address indexed buyer,
        address indexed seller,
        uint amount
    );

    constructor() {}

    function purchaseTokens(uint256 _amount) public payable {
        uint256 amountInWei = _amount * 1e18;

        require(
            msg.value == amountInWei,
            "Sent eth amount must match the transaction value"
        );
        require(
            address(this).balance >= amountInWei,
            "Insufficient account balance"
        );

        payable(sellerAccount).transfer(amountInWei);
        emit TransactionComplete(msg.sender, sellerAccount, amountInWei);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract CartSale {
    address sellerAccount = 0x8771B888Fe2486F3a2874703cb09f245a3e4f3e0;

    struct Order {
        uint orderId;
        uint amount;
        uint items;
        uint timestamp;
    }

    struct Orders {
        uint userId;
        uint numOrders;
        // mapping(uint => Order) orders;
    }

    mapping(address => Orders) public usersOrders;

    event TransactionComplete(
        address indexed buyer,
        address indexed seller,
        uint amount
    );

    constructor() {}

    function purchaseCoffee(
        uint256 _amount,
        uint orderId,
        uint userId,
        uint items
    ) public payable {
        uint256 amountInWei = _amount * 1e18;

        require(
            msg.value == amountInWei,
            "Sent eth amount must match the transaction value"
        );
        require(
            address(this).balance >= amountInWei,
            "Insufficient account balance"
        );

        // Order memory newOrder = Order(orderId, _amount, items, block.timestamp);
        Orders memory newOrders = Orders(0, userId);
        usersOrders[msg.sender] = newOrders;
        // usersOrders[msg.sender].userId = userId;
        // usersOrders[msg.sender].orders[
        //     usersOrders[msg.sender].numOrders
        // ] = newOrder;

        payable(sellerAccount).transfer(amountInWei);

        emit TransactionComplete(msg.sender, sellerAccount, amountInWei);
    }
}

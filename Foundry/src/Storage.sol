// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Storage {
    uint256 private _number;

    event NumberStored(uint256 indexed number, address indexed sender);

    function store(uint256 num) public {
        _number = num;
        emit NumberStored(num, msg.sender);
    }

    function retrieve() public view returns (uint256) {
        return _number;
    }

    function increment() public {
        _number += 1;
        emit NumberStored(_number, msg.sender);
    }

    function decrement() public {
        require(_number > 0, "Cannot decrement below zero");
        _number -= 1;
        emit NumberStored(_number, msg.sender);
    }
}

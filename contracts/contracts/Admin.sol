// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Admin {
    address _owner;

    constructor(address initialOwner) {
        _owner = initialOwner;
    }

    modifier onlyOwner(address caller) {
        if (caller != address(0)) {
            require(caller == _owner, "Address not authorized to call this method");
        } else {
            require(msg.sender == _owner, "Address not authorized to call this method");
        }
        _;
    }

    function setOwner(address newOwner) public onlyOwner(newOwner) {
        _owner = newOwner;
    }

    function getOwner() public view returns(address) {
        return _owner;
    }
}
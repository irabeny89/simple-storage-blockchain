// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
    uint256 storedData;

    event SetValue(uint value);

    function get() public view returns (uint256) {
        return storedData;
    }

    function set(uint256 value) public {
        storedData = value;
        emit SetValue(value);
    }
}

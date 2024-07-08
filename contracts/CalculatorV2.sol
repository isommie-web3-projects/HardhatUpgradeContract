// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "./CalculatorV1.sol";

contract CalculatorV2 is CalculatorV1 {
    function subtract(uint c, uint d) public pure returns (uint) {
        return c - d;
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.21;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract CalculatorV2 is Initializable {
    uint public val;

    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }

    function multiply(uint a, uint b) public pure returns (uint) {
        return a * b;
    }
  function getVal() public view returns (uint) {
        return val;
    }

}

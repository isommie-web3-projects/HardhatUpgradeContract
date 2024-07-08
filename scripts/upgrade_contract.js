const { ethers, upgrades } = require("hardhat");
//the address of the deployed proxy
const PROXY = "0xFC1d589405c1A49B47E5EB54247bC7b53873dD82";

async function main() {
    const CalculatorV2 = await ethers.getContractFactory("CalculatorV2");
    console.log("Upgrading Calculator...");
    await upgrades.upgradeProxy(PROXY, CalculatorV2);
    console.log("Calculator upgraded");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
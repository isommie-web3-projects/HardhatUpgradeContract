const { ethers, upgrades } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(
    "Deploying contracts with the account:", 
    deployer.address
    );
    
    // Deploy CalculatorV1 contract
    const CalculatorV1 = await ethers.getContractFactory("CalculatorV1");
    console.log("Deploying Calculator...");
    const calculator = await upgrades.deployProxy(CalculatorV1, [42], {
        initializer: "initialize",
    });
    await calculator.deployed();
    console.log("Calculator deployed to:", calculator.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
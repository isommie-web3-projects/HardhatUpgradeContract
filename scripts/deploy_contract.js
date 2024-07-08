const { ethers, upgrades } = require("hardhat");

async function main() {
    const CalculatorV1 = await ethers.getContractFactory("CalculatorV1");
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the account:", 
        deployer.address
        );
    console.log("Deploying Calculator...");
    const calculatorV1 = await upgrades.deployProxy(CalculatorV1, [42], {
        initializer: "initialize",
    });
    await calculatorV1.deployed();
    console.log("CalculatorV1 proxy contract deployed at:", calculatorV1.address);
    console.log("first deployment done")
}

// async function main() {
//     // const CalculatorV1 = await ethers.getContractFactory("CalculatorV1");
    
//     // Deploy CalculatorV1 contract
//     const [deployer] = await ethers.getSigners();
//     console.log(
//         "Deploying contracts with the account:", 
//         deployer.address
//         );
    
//     console.log("Deploying Contracts...");
//     const calculatorV1 = await upgrades.deployProxy(
//         "CalculatorV1"
//     );

//     await calculatorV1.deployed();
//     console.log("CalculatorV1 proxy contract deployed at:", calculatorV1.address);
//     console.log("first deployment done")

//     //error here - Upgrading V1 contract
//     const CalculatorV2 = await ethers.getContractFactory("CalculatorV2");
//     const calculatorV2 = await upgrades.upgradeProxy(calculatorV1.address, CalculatorV2);
//     // const calculator = await upgrades.upgradeProxy(CalculatorV1, [42], {
//     //     initializer: "initialize",
//     // });

//     await calculatorV2.deployed();
//     console.log("CalculatorV1 upgraded to:", calculatorV2.address);

//     console.log("Proxy contract upgraded successfully");
// }

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
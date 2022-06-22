const { ethers, network } = require("hardhat")
const { verify } = require("../utils/verify")

async function main() {
  console.log("----------------------------------------------------")
  const Contract = await ethers.getContractFactory('BadgerBotStakingContract');
  const contract = await Contract.deploy();

  console.log("Contract address: ", contract.address);

  await contract.deployed()
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })

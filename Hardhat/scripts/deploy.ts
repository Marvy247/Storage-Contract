import { ethers } from "hardhat";

async function main() {
  console.log("Deploying Storage contract to Sepolia network...");
  
  const Storage = await ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();
  
  await storage.waitForDeployment();
  
  const contractAddress = await storage.getAddress();
  console.log("Storage contract deployed to:", contractAddress);
  console.log("Transaction hash:", storage.deploymentTransaction()?.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

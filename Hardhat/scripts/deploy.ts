import { ethers } from "hardhat";

async function main() {
  console.log("Deploying Storage contract to coreDAO testnet...");
  
  const Storage = await ethers.getContractFactory("Storage");
  
  // Deploy with explicit gas settings for coreDAO testnet
  const storage = await Storage.deploy({
    gasPrice: ethers.parseUnits("1", "gwei"), // Lower gas price for testnet
    gasLimit: 300000 // Sufficient gas limit
  });
  
  await storage.waitForDeployment();
  
  const contractAddress = await storage.getAddress();
  console.log("Storage contract deployed to:", contractAddress);
  console.log("Transaction hash:", storage.deploymentTransaction()?.hash);
  console.log("Network: coreDAO testnet (Chain ID: 1114)");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

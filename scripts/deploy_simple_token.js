const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Token parameters
  const name = "AntorLira";
  const symbol = "AOL";
  const initialSupply = ethers.utils.parseEther("1000000000"); // 1 billion tokens
  const logoURL =
    "https://raw.githubusercontent.com/alkindivv/alkindivv.site/main/public/images/default.png";

  // Deploy token
  console.log("\n=== Deploying Token ===");
  const SimpleToken = await ethers.getContractFactory("SimpleToken");
  const token = await SimpleToken.deploy(name, symbol, initialSupply, logoURL);

  console.log("Waiting for deployment transaction...");
  await token.deployed();
  console.log("Token deployed successfully");

  // Tunggu beberapa block untuk memastikan deployment selesai
  console.log("Waiting for deployment confirmation...");
  await token.deployTransaction.wait(3);

  console.log("\n=== Token Information ===");
  console.log("Token Address:", token.address);
  console.log("Name:", await token.name());
  console.log("Symbol:", await token.symbol());
  console.log(
    "Total Supply:",
    ethers.utils.formatEther(await token.totalSupply()),
    symbol
  );
  console.log("Owner:", await token.owner());
  console.log("Logo URL:", await token.metadataURI());

  console.log("\n=== Important Links ===");
  console.log(
    "Explorer:",
    `https://testnet.monadexplorer.com/address/${token.address}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

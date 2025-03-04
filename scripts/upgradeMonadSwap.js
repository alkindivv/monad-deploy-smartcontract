const { ethers, upgrades } = require("hardhat");

async function main() {
  // Alamat proxy yang sudah di-deploy
  const PROXY_ADDRESS = "0xf2654556f439a5e6DE4f98c23159e4e3E90D1829";

  console.log("\n🔄 Memulai upgrade MonadSwapAggregatorV1...");
  console.log("Proxy address:", PROXY_ADDRESS);

  // Deploy implementation baru
  const MonadSwapV1 = await ethers.getContractFactory("MonadSwapAggregatorV1");
  console.log("\n📝 Upgrading proxy...");

  const upgraded = await upgrades.upgradeProxy(PROXY_ADDRESS, MonadSwapV1);
  await upgraded.deployed();

  console.log("\n✅ Upgrade selesai!");
  console.log("Proxy tetap di address:", PROXY_ADDRESS);
  console.log(
    "Implementation baru di address:",
    await upgrades.erc1967.getImplementationAddress(PROXY_ADDRESS)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

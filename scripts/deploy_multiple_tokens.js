const { ethers } = require("hardhat");
const {
  adjectives,
  nouns,
  suffixes,
  getRandomSupply,
} = require("./token_names");

// Fungsi untuk menghasilkan nama token random
function generateTokenName() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${adjective}${noun}${suffix}`;
}

// Fungsi untuk menghasilkan symbol token dari nama
function generateSymbol(name) {
  // Ambil huruf pertama dari setiap kata dan tambahkan angka random
  const letters = name.match(/[A-Z]/g).join("");
  // Tambahkan 1-2 angka random di akhir untuk menghindari duplikasi
  const randomNum = Math.floor(Math.random() * 99) + 1;
  return `${letters}${randomNum}`;
}

// Fungsi untuk delay random
function getRandomDelay() {
  // Random delay antara 30 detik sampai 3 menit
  return Math.floor(
    Math.random() * (500 * 60 * 1000 - 60 * 60 * 1000) + 60 * 60 * 1000
  );
}

// Fungsi untuk mengacak array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function main() {
  // Baca private keys dari .env (format: PRIVATE_KEY_1=xxx\nPRIVATE_KEY_2=xxx\n...)
  const privateKeys = Object.keys(process.env)
    .filter((key) => key.startsWith("PRIVATE_KEY_"))
    .map((key) => process.env[key]);

  console.log(`Found ${privateKeys.length} wallets`);

  // Acak urutan private keys
  const shuffledKeys = shuffleArray([...privateKeys]);

  // Deploy untuk setiap wallet
  for (let i = 0; i < shuffledKeys.length; i++) {
    const wallet = new ethers.Wallet(shuffledKeys[i], ethers.provider);
    const tokenName = generateTokenName();
    const tokenSymbol = generateSymbol(tokenName);
    const supply = getRandomSupply();

    console.log(`\n=== Deploying token ${i + 1}/${shuffledKeys.length} ===`);
    console.log(`Wallet: ${wallet.address}`);
    console.log(`Token Name: ${tokenName}`);
    console.log(`Token Symbol: ${tokenSymbol}`);
    console.log(`Total Supply: ${supply.toLocaleString()} tokens`);

    try {
      // Deploy token
      const SimpleToken = await ethers.getContractFactory(
        "SimpleToken",
        wallet
      );
      const token = await SimpleToken.deploy(
        tokenName,
        tokenSymbol,
        ethers.utils.parseEther(supply.toString()),
        "" // Kosongkan metadata URI
      );

      console.log("Waiting for deployment...");
      await token.deployed();
      console.log(`Token deployed to: ${token.address}`);

      // Tunggu beberapa block untuk konfirmasi
      console.log("Waiting for confirmation...");
      await token.deployTransaction.wait(2); // Kurangi jumlah block yang ditunggu

      // Random delay sebelum deploy berikutnya
      if (i < shuffledKeys.length - 1) {
        const delay = getRandomDelay();
        console.log(
          `Waiting ${Math.floor(
            delay / 1000
          )} seconds before next deployment...\n`
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    } catch (error) {
      console.error(
        `Error deploying token for wallet ${wallet.address}:`,
        error
      );
      continue; // Lanjut ke wallet berikutnya jika terjadi error
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

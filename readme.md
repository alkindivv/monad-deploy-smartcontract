# Monad Token Deployment Scripts

Repository ini berisi kumpulan smart contract dan script untuk deploy token di jaringan Monad Testnet.

## Smart Contracts

Repository ini memiliki 3 kontrak berbeda:

### 1. SimpleToken.sol
- Kontrak ERC20 sederhana tanpa proxy
- Fitur: 
  - Mint token saat deploy
  - Metadata URI untuk logo token
  - Fungsi pause/unpause untuk keamanan
  - Ownership untuk kontrol akses

### 2. MonadToken.sol
- Kontrak ERC20 yang dapat di-upgrade (menggunakan proxy)
- Fitur:
  - Semua fitur ERC20 standard
  - ERC20Permit untuk gasless approval
  - ERC20Votes untuk governance
  - Pausable untuk keamanan
  - Upgradeable untuk pembaruan kontrak

### 3. MonadSwapAggregator.sol
- Kontrak untuk interaksi dengan DEX di Monad
- Fitur:
  - Swap token menggunakan berbagai DEX
  - Route finding untuk mendapatkan harga terbaik
  - Fee sharing untuk pengguna
  - Emergency withdrawal untuk keamanan

## Scripts

### 1. deploy_simple_token.js
Script untuk deploy single token dengan fitur:
- Deploy token ERC20 sederhana
- Konfigurasi parameter token (nama, symbol, supply)
- Set logo URL untuk token
- Menunggu konfirmasi deployment (3 blocks)
- Menampilkan informasi token dan link explorer

Cara penggunaan:
```bash
npx hardhat run scripts/deploy_simple_token.js --network monad
```

### 2. deploy_multiple_tokens.js
Script untuk deploy token ke banyak wallet secara otomatis dengan fitur:
- Deploy dari multiple wallet secara random
- Nama token yang unik dan natural menggunakan kombinasi kata
- Supply yang bervariasi (100jt - 1M token)
- Delay random antar deployment (30 detik - 3 menit)
- Error handling untuk setiap deployment

Cara penggunaan:
```bash
npx hardhat run scripts/deploy_multiple_tokens.js --network monad
```

### 3. deployAggregator.js
Script untuk deploy MonadSwapAggregator dengan fitur:
- Deploy kontrak aggregator untuk DEX
- Mendukung Bean DEX dan Ambient DEX
- Menampilkan alamat kontrak dan DEX yang didukung
- Instruksi untuk verifikasi kontrak

Cara penggunaan:
```bash
npx hardhat run scripts/deployAggregator.js --network monad
```

### 4. upgradeMonadSwap.js
Script untuk upgrade kontrak MonadSwapAggregator dengan fitur:
- Upgrade kontrak yang sudah di-deploy
- Mempertahankan alamat proxy yang sama
- Deploy implementation baru
- Menampilkan alamat implementation baru

Cara penggunaan:
```bash
npx hardhat run scripts/upgradeMonadSwap.js --network monad
```

### 5. useMonadSwap.js
Script interface CLI untuk berinteraksi dengan MonadSwap dengan fitur:
- Pilihan DEX (Bean DEX atau Izumi DEX)
- Support multiple token (MON, USDC, USDT, WETH, DAK)
- Check balance dan allowance otomatis
- Kalkulasi slippage (1%)
- Approval token otomatis
- Menampilkan balance sebelum dan sesudah swap
- Interface interaktif dengan prompts

Cara penggunaan:
```bash
node scripts/useMonadSwap.js
```

### 6. token_names.js
Berisi daftar kata untuk generate nama token:
- Adjectives (kata sifat): 100+ kata
- Nouns (kata benda): 100+ kata
- Suffixes (akhiran): 100+ kata
- Fungsi untuk generate supply random

## Setup Environment

1. Install Dependencies
```bash
npm install
```

2. Setup .env File
```bash
# Untuk single deployment
PRIVATE_KEY=your_private_key

# Untuk multiple deployment
PRIVATE_KEY_1=your_private_key_1
PRIVATE_KEY_2=your_private_key_2
...
PRIVATE_KEY_50=your_private_key_50
```

## Konfigurasi

File `hardhat.config.js` berisi konfigurasi untuk:
- Monad Testnet RPC: https://testnet-rpc.monad.xyz/
- Compiler settings: Solidity 0.8.20
- Network settings: Chain ID 1891
- Verification settings: Monad Explorer

## Keamanan

- Private keys harus disimpan di file `.env` (tidak di-commit ke git)
- Gunakan delay yang cukup antar deployment untuk menghindari rate limit
- Pastikan wallet memiliki MON untuk gas fee
- Periksa allowance sebelum melakukan swap
- Gunakan slippage protection saat swap

## License

MIT License - lihat file [LICENSE](LICENSE) untuk detail lengkap.

# ComplaintLedger — Blockchain Complaint DApp

## 📌 Overview

ComplaintLedger is a decentralized application (DApp) that enables citizens to submit complaints securely on the Ethereum blockchain. The system ensures transparency, immutability, and accountability by storing complaint records permanently on-chain.

Users can track complaint status, while authorities can manage and resolve them through a structured workflow.

---

## 🚀 Features

* 📝 Submit complaints using MetaMask
* 🔐 Tamper-proof storage on blockchain
* 🆔 Unique complaint ID for tracking
* 📊 Status tracking system
* 👨‍💼 Admin dashboard for authorities
* 📎 File attachments using IPFS (via Pinata)

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* MetaMask

**Backend**

* Node.js
* Express.js
* Ethers.js

**Blockchain**

* Solidity (Smart Contracts)
* Ethereum (Sepolia Testnet)

**Storage**

* IPFS (via Pinata)

---

## ⚙️ How It Works

1. User connects MetaMask wallet
2. Submits complaint through frontend
3. Complaint is stored on Ethereum blockchain
4. Unique complaint ID is generated
5. Authorities manage complaints via dashboard
6. Status flow:

   ```
   Pending → Under Review → Resolved
   ```

---

## 📂 Project Structure

```
blockchain-complaint-system/
│── complaint-dapp/        # React frontend
│── complaint-backend/     # Node.js backend API
│── contracts/             # Solidity smart contracts
```

---

## ▶️ Getting Started

### 1. Clone the repo

```
git clone https://github.com/harshinisapare/blockchain-complaint-system.git
cd blockchain-complaint-system
```

### 2. Install dependencies

```
cd complaint-backend
npm install

cd ../complaint-dapp
npm install
```

### 3. Run the project

Backend:

```
npm start
```

Frontend:

```
npm start
```

---

## 📌 Project Status

🚧 Work in Progress

* Smart contract deployed on Sepolia testnet
* Frontend & backend running locally

---

## 📄 License

This project is developed for educational purposes.

ComplaintLedger — Blockchain Complaint DApp
A decentralized application where citizens can submit complaints permanently on the Ethereum blockchain, track their status, and authorities can manage resolutions — all transparently and tamper-proof.
Tech Stack

Frontend: React.js + MetaMask
Backend: Node.js + Express + Ethers.js
Blockchain: Solidity smart contract on Ethereum (Sepolia Testnet)
Storage: IPFS via Pinata (file attachments)

What It Does

Citizens connect their MetaMask wallet and submit a complaint on-chain
Each complaint gets a unique ID stored permanently on the blockchain
Anyone can track a complaint's status using its ID
Authorities can view all complaints on a dashboard and update their status
Status flow: Pending → Under Review → Resolved

Project Structure
complaint-dapp/        ← React frontend
complaint-backend/     ← Node.js backend API
Status
Work in progress — contract deployed on Sepolia testnet, frontend and backend running locally.

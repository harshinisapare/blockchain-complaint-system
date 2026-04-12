import React, { useState } from "react";
import { ethers } from "ethers";
import "./WalletConnect.css";

function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not found! Install it from metamask.io");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
    } catch (err) {
      console.error("Connection failed:", err);
    }
  };

  const disconnect = () => setWalletAddress(null);

  const short = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  return walletAddress ? (
    <div className="wallet-connected">
      <span className="wallet-address">{short(walletAddress)}</span>
      <button className="wallet-disconnect" onClick={disconnect}>✕</button>
    </div>
  ) : (
    <button className="wallet-btn" onClick={connectWallet}>
      Connect Wallet
    </button>
  );
}

export default WalletConnect;
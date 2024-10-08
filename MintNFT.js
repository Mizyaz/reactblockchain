import React, { useEffect, useState } from "react";
import * as anchor from "@project-serum/anchor";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction } from "@solana/spl-token";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { Program, web3 } from "@project-serum/anchor";

const idl = require('./idl.json');  // Akıllı kontratın IDL dosyası
const programID = new PublicKey("yc7wEoXNfH6MUV1tExTh2eRtkiA1U1U6nQTKNWKihDm");  // Akıllı kontratın program ID'si
const network = clusterApiUrl("devnet");

const MintNFT = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  // Solana cüzdanını bağla
  const connectWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error("Cüzdan bağlantı hatası:", err);
      }
    }
  };

  const getProvider = () => {
    const connection = new Connection(network, "processed");
    const provider = new anchor.AnchorProvider(
      connection,
      new PhantomWalletAdapter(),
      anchor.AnchorProvider.defaultOptions()
    );
    return provider;
  };

  // NFT mint fonksiyonu
  const mintNFT = async () => {
    const provider = getProvider();
    const program = new Program(idl, programID, provider);

    const mintKey = anchor.web3.Keypair.generate();
    const tokenAccount = await web3.PublicKey.findProgramAddressSync(
      [walletAddress.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mintKey.publicKey.toBuffer()],
      program.programId
    );

    try {
      await program.methods.mintNft("NFT Title", "NFT Symbol", "https://raw.githubusercontent.com/Coding-and-Crypto/Rust-Solana-Tutorial/refs/heads/master/nfts/mint-nft/assets/example.json", {
        accounts: {
          mint: mintKey.publicKey,
          tokenAccount: tokenAccount[0],
          authority: provider.wallet.publicKey,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: web3.SystemProgram.programId,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        },
        signers: [mintKey],
      });
      console.log("NFT basıldı!");
    } catch (err) {
      console.error("Minting hatası:", err);
    }
  };

  return (
    <div>
      {walletAddress ? (
        <button onClick={mintNFT}>Mint NFT</button>
      ) : (
        <button onClick={connectWallet}>Cüzdan Bağla</button>
      )}
    </div>
  );
};

export default MintNFT;

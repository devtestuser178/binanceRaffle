"use client";
import React, { useState } from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaCopy } from "react-icons/fa";

const RevealButton = ({
  currency,
  address,
}: {
  currency: string;
  address: string;
}) => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleReveal = () => {
    setRevealed((prev) => !prev);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-col sm:items-center  ">
      <Button
        onClick={toggleReveal}
        className="px-6 py-3 bg-customAltYellow hover:bg-customAltYellow/90 
          w-full sm:w-56 text-customBlack text-sm 
          font-bold rounded-lg shadow-lg hover:scale-105 
          transition-transform duration-300"
      >
        {revealed ? `Hide ${currency} Address` : `Reveal ${currency} Address`}
      </Button>

      {revealed && (
        <motion.div
          className="flex items-center justify-center flex-col 
            text-slate-100 text-lg bg-gray-800 font-mono
             p-4 py-7 rounded shadow-md space-y-6 w-full sm:w-auto "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p> {address}</p>
          <Button
            onClick={handleCopy}
            className="flex items-center justify-center px-4 py-3 
              bg-gray-700 hover:bg-gray-600 text-gray-100 text-sm 
              font-medium rounded-lg shadow-md w-full sm:w-auto transition"
          >
            <FaCopy className="mr-2" />
            {copied ? "Copied!" : "Copy to Clipboard"}
          </Button>
        </motion.div>
      )}
    </div>
  );
};

const Hero = () => {
  const walletAddresses = [
    { currency: "BTC", address: "your-btc-wallet-address" },
    { currency: "ETH", address: "your-eth-wallet-address" },
    { currency: "USDT", address: "your-usdt-wallet-address" },
    { currency: "ADA", address: "your-ada-wallet-address" },
    { currency: "SOL", address: "your-sol-wallet-address" },
    { currency: "XRP", address: "your-xrp-wallet-address" },
  ];

  return (
    <section className="text-center py-12">
      <Container>
        <div className="space-y-12">
          <div className="">
            <p className=" text-xl text-customYellow font-semibold py-2">
              {"Don't Miss Out!"}
            </p>
            <div className="space-y-6">
              <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-6xl">
                Join the Bull-Run
              </h1>
              <p className="text-slate-300 text-xl font-medium">
                As a thank you to our users, participate in our Bull-Run Raffle
                and win exciting prizes!
              </p>
            </div>
          </div>

          <div className="bg-gray-800 px-6 py-6 rounded-lg shadow-md text-left space-y-4">
            <h2 className="text-white font-bold text-2xl">How to Join</h2>
            <ol className="list-decimal list-inside text-gray-300 text-lg space-y-2">
              <li>Copy the wallet address of your preferred currency below.</li>
              <li>
                Send a minimum of 0.001 BTC or equivalent to the wallet address.
              </li>
              <li>Save your transaction ID for verification.</li>
              <li>Stay tuned for raffle results on our official channels.</li>
            </ol>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 ">
            {walletAddresses.map(({ currency, address }) => (
              <RevealButton
                key={currency}
                currency={currency}
                address={address}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

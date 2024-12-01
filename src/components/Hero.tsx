"use client";
import React, { useState } from "react";
import Container from "./Container";
import { Button } from "./ui/button";

const RevealButton = ({
  currency,
  address,
}: {
  currency: string;
  address: string;
}) => {
  const [revealed, setRevealed] = useState(false);

  const toggleReveal = () => {
    setRevealed((prev) => !prev);
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={toggleReveal}
        className="px-6 py-3 max-w-fit bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      >
        {revealed ? `Hide ${currency} Address` : `Reveal ${currency} Address`}
      </Button>

      {revealed && (
        <p className="text-slate-100 font-mono bg-gray-900 p-4 rounded shadow-md">
          {address}
        </p>
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
    <section className="bg-gradient-to-b from-gray-900 to-black text-center py-12">
      <Container>
        <div className="space-y-12">
          <div>
            <h1 className="text-white font-extrabold text-5xl mb-4">
              Join the Bull-Run
            </h1>
            <p className="text-gray-300 text-lg font-medium">
              As a thank you to our users, participate in our Bull-Run Raffle
              and win exciting prizes!
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-left space-y-4">
            <h2 className="text-white font-bold text-2xl">How to Join</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>Copy the wallet address of your preferred currency below.</li>
              <li>
                Send a minimum of 0.001 BTC or equivalent to the wallet address.
              </li>
              <li>Save your transaction ID for verification.</li>
              <li>Stay tuned for raffle results on our official channels.</li>
            </ol>
          </div>

          <div className="space-y-6">
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

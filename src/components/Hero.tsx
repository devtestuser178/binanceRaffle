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
    <div className="flex flex-col sm:flex-col sm:items-center">
      <Button
        onClick={toggleReveal}
        className="px-6 py-3 bg-customAltYellow hover:bg-customAltYellow/90 
          w-full  text-customBlack text-sm 
          font-bold rounded-lg shadow-lg hover:scale-105 
          transition-transform duration-300"
      >
        {revealed ? `Hide ${currency} Address` : `Reveal ${currency} Address`}
      </Button>

      {revealed && (
        <motion.div
          className="flex items-center justify-center flex-col 
            text-slate-100 text-xl bg-gray-800 font-mono
             p-4 py-7 rounded shadow-md space-y-6 w-full  "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="">{address}</p>
          <Button
            onClick={handleCopy}
            className="flex items-center justify-center px-4 py-3 
              bg-gray-700 hover:bg-gray-600 text-gray-100 text-sm 
              font-medium rounded-lg shadow-md w-full  transition"
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
    { currency: "BTC", address: "bc1qjgmzdvsfmajgp0m7ypyza8gz4p0a5jpxzlyr3v" },
    { currency: "ETH", address: "0x5F883C693C2762bab8AFfFc2659A1e884d2B1418" },
    { currency: "BNB", address: "rabN728geaaAFusZ1Vsqds6TSjHdg456ca" },
    { currency: "USDT", address: "0x5F883C693C2762bab8AFfFc2659A1e884d2B1418" },
    {
      currency: "SOL",
      address: "9t8xWVBqNQVNrDEoyPGiD4qWcP7R4B2HYzZmLXoLAn6A",
    },
    {
      currency: "Doge",
      address: "DMYQitPbFArNwrWazv1heXXYwV85W3jYpQ",
    },
  ];

  return (
    <section className="text-center py-12">
      <Container>
        <div className="space-y-12">
          <div className="">
            <p className=" text-lg md:text-xl text-customYellow font-semibold py-4">
              {"Don't Miss Out!"}
            </p>
            <div className="space-y-6">
              <h1 className="text-white font-extrabold text-4xl md:text-6xl w-full sm:w-10/12 mx-auto">
                Join the Bull-Run Raffle
              </h1>
              <p className="text-slate-300 text-xl font-medium w-7/12 mx-auto">
                As a thank you to our users, participate in our Bull-Run Raffle
                and win exciting prizes!
              </p>
            </div>
          </div>
          <div className="py-4">
            <div className="bg-gray-800 px-6 py-6 rounded-lg shadow-md text-left space-y-4">
              <h2 className="text-white font-bold text-2xl">How to Join</h2>
              <ol className="list-decimal list-inside text-gray-300 text-lg space-y-2">
                <li>
                  Copy the wallet address of your preferred currency below.
                </li>
                <li>
                  Send a minimum of 0.001 BTC or equivalent to the wallet
                  address.
                </li>
                <li>Save your transaction ID for verification.</li>
                <li>Stay tuned for raffle results on our official channels.</li>
              </ol>
            </div>
          </div>

          <div className="grid gap-10 grid-cols-1 md:grid-cols-2  ">
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

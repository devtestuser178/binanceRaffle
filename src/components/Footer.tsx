import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import binanceLogo from "../assets/binance-h.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-customGray text-gray-300 py-8  px-5 max-w-8xl mx-auto">
      <div className="space-y-6">
        <Separator className="my-4 bg-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Link href={"./"}>
            <Image
              src={binanceLogo}
              alt="Binance Logo"
              width={140}
              height={140}
            />
          </Link>

          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/binance"
              className="text-gray-300 hover:text-white transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://x.com/binance"
              className="text-gray-300 hover:text-white transition"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/Binance/"
              className="text-gray-300 hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/binance"
              className="text-gray-300 hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-slate-400">
          {"Binance© 2024. All rights reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

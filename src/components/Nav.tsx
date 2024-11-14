"use client";
import React from "react";
import { motion } from "framer-motion";
import binanceLogo from "../assets/binance-h.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import displayIcon from "../assets/icons/display-icon.svg";
import nightIcon from "../assets/icons/night-icon.svg";
import bitcoinIcon from "../assets/icons/bitcoin-icon.svg";

import menuIcon from "../assets/icons/menu.svg";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface AuthButtonProps {
  href: string;
  children: string;
  className: string;
}

export const AuthButton = ({ href, children, className }: AuthButtonProps) => {
  return (
    <Button
      className={cn(
        `${className} w-full text-sm font-semibold hover:filter hover:brightness-90`
      )}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export const Nav = () => {
  return (
    <motion.div
      className="py-3 bg-customBlack"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-between items-center px-5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <Image
            src={binanceLogo}
            alt="Binance Logo"
            className="logo"
            width={125}
            height={125}
          />
        </div>

        <div className="h-fit flex items-center md:hidden">
          <Sheet>
            <SheetTrigger className="hover:bg-transparent bg-transparent hover:text-customYellow ">
              <Image width={30} height={30} src={menuIcon} alt="Display Icon" />
            </SheetTrigger>
            <SheetContent className="bg-customBlack w-screen p-0">
              <SheetHeader className="px-6 py-8">
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
                <div className="flex space-x-4">
                  <AuthButton
                    className="bg-customAltGrey hover:bg-customGrey hover:backdrop-blur-md text-white  "
                    href="https://accounts.binance.com/en/login?loginChannel=&return_to="
                  >
                    Log In
                  </AuthButton>
                  <AuthButton
                    className="bg-customYellow hover:bg-customYellow hover:backdrop-blur-md text-customBlack "
                    href="https://accounts.binance.com/en/register?registerChannel=&return_to="
                  >
                    Sign Up
                  </AuthButton>
                </div>
              </SheetHeader>
              <div className="py-2 w-full space-y-2"></div>
              <Button className="bg-transparent hover: w-full hover:bg-customGrey rounded-none flex items-start justify-start">
                <Link
                  className="px-3"
                  href={"https://www.binance.com/en/crypto/buy"}
                >
                  Buy Crypto
                </Link>
                <Link
                  className="px-3"
                  href={"https://www.binance.com/en/crypto/buy"}
                >
                  Buy Crypto
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>

        <div className="space-x-2  hidden md:flex md:items-center ">
          <AuthButton
            className="bg-customGrey hover:bg-customGrey hover:backdrop-blur-md text-white   "
            href="https://accounts.binance.com/en/login?loginChannel=&return_to="
          >
            Log In
          </AuthButton>
          <AuthButton
            className="bg-customYellow hover:bg-customYellow hover:backdrop-blur-md text-customBlack "
            href="https://accounts.binance.com/en/register?registerChannel=&return_to="
          >
            Sign Up
          </AuthButton>
          <Button
            className="hover:bg-transparent bg-transparent hover:text-customYellow "
            size="icon"
          >
            <Image
              width={30}
              height={30}
              src={displayIcon}
              alt="Display Icon"
            />
          </Button>
          <Button
            className="hover:bg-transparent bg-transparent hover:text-customYellow "
            size="icon"
          >
            <Image width={30} height={30} src={nightIcon} alt="Display Icon" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

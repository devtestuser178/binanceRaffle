"use client";
import React from "react";
import { motion } from "framer-motion";
import binanceLogo from "../assets/binance-h.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

import qrCode from "./../assets/images/qrCode.png";

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

        {/* Mobile */}
        <div className="h-fit flex items-center md:hidden">
          <Sheet>
            <SheetTrigger className="hover:bg-transparent bg-transparent hover:text-customYellow ">
              <Image width={30} height={30} src={menuIcon} alt="Display Icon" />
            </SheetTrigger>
            <SheetContent className="bg-customBlack w-screen p-0">
              <SheetHeader className="container px-4 py-8">
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
              <Button className="container bg-transparent hover: w-full hover:bg-customGrey rounded-none flex items-start justify-start">
                <Link
                  className="text-sm"
                  href={"https://www.binance.com/en/crypto/buy"}
                >
                  Buy Crypto
                </Link>
              </Button>
              <Button
                className=" container bg-transparent hover: w-full hover:bg-customGrey 
                rounded-none flex items-start justify-start"
              >
                <Link
                  className=""
                  href={"https://www.binance.com/en/crypto/buy"}
                >
                  Markets
                </Link>
              </Button>
              <Accordion
                type="single"
                collapsible
                className="container text-white "
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className="bg-transparent px-4 hover: w-full 
                    hover:bg-customGrey rounded-none flex items-start justify-start"
                  >
                    Trade
                  </AccordionTrigger>
                  <AccordionContent>
                    <Button
                      className="bg-transparent hover: w-full hover:bg-customGrey 
                      rounded-none flex items-start justify-start"
                    >
                      <Link
                        className="px-3"
                        href={"https://www.binance.com/en/crypto/buy"}
                      >
                        Basic
                      </Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop + Tablet */}
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
          <Popover>
            <PopoverTrigger className="hover:bg-transparent bg-transparent ">
              <svg
                className="hover:fill-current hover:text-customYellow"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={40}
                height={40}
              >
                <path
                  className="hover:text-customYellow"
                  d="M7.5 6V9H4.5V3H5H7.5H16H19V6V9H16V6H7.5ZM5 21H4.5V15H7.5V18H16V15H19V18V21H16H7.5H5ZM13.5088 12.0024L16.0176 12.0078L12.0088 16.0166L8 12.0078L10.5088 11.9832V8H13.5088V12.0024Z"
                  fill="#fafafa"
                />
              </svg>
            </PopoverTrigger>
            <PopoverContent className="w-56 space-y-2 flex items-center flex-col justify-center bg-customGrey outline-none bottom-0 container px-8">
              <Image src={qrCode} alt="qr-code"></Image>
              <p className="text-center text-slate-100 text-sm pb-2">
                {"Scan to Download App iOS & Android"}
              </p>
              <Button
                asChild
                className="hover:bg-customYellow/80 bg-customYellow  p-0 text-customGrey "
              >
                <Link
                  className="px-3 font-medium"
                  href={"https://www.binance.com/en/download?pageType=normal"}
                >
                  More Download Options
                </Link>
              </Button>
            </PopoverContent>
          </Popover>
          <Button className="hover:bg-transparent bg-transparent p-0 hover:text-customYellow ">
            <svg
              viewBox="0 0 24 24"
              fillRule="evenodd"
              clipRule="evenodd"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "30px", height: "30px" }}
              stroke="currentColor"
            >
              <path
                d="M20 12.67A6.233 6.233 0 0111.33 4 8.015 8.015 0 1020 12.67z"
                fill="#fafafa"
              ></path>
            </svg>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

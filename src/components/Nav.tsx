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
import { navLinks } from "@/data/NavLinks";
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

interface NavMenuProps {
  className?: string;
}

export const NavMenu = ({ className = "" }: NavMenuProps) => {
  return (
    <div className={cn(`text-slate-200 font-semibold  px-6 ${className} `)}>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          className={`text-slate-200 text-xl lg:text-sm font-medium hover:text-customYellow`}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export const Nav = () => {
  return (
    <motion.div className="py-3 bg-customBlack max-w-8xl mx-auto">
      <motion.div className="flex justify-between items-center px-5">
        <div className="flex items-center">
          <Link href={"./"}>
            <Image
              src={binanceLogo}
              alt="Binance Logo"
              className="logo"
              width={125}
              height={125}
            />
          </Link>
          <NavMenu className="hidden lg:flex space-x-6" />
        </div>

        {/* Mobile */}
        <div className="h-fit flex items-center lg:hidden">
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
              <NavMenu className="py-2 w-full space-y-6 flex flex-col items-start justify-start " />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop + Tablet */}
        <div className="space-x-2  hidden lg:flex lg:items-center ">
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
                width={30}
                height={30}
              >
                <path
                  className="hover:text-customYellow"
                  d="M7.5 6V9H4.5V3H5H7.5H16H19V6V9H16V6H7.5ZM5 21H4.5V15H7.5V18H16V15H19V18V21H16H7.5H5ZM13.5088 12.0024L16.0176 12.0078L12.0088 16.0166L8 12.0078L10.5088 11.9832V8H13.5088V12.0024Z"
                  fill="#fafafa"
                />
              </svg>
            </PopoverTrigger>
            <PopoverContent className=" w-52 space-y-2 flex items-center flex-col justify-center bg-customGrey outline-none bottom-0 container px-8">
              <Image
                src={qrCode}
                alt="qr-code"
                width={400}
                height={300}
              ></Image>
              <p className="text-center text-slate-100 text-sm pb-2 w-8/12">
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
              style={{ width: "25px", height: "25px" }}
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

"use client";
import React from "react";
import { motion } from "framer-motion";
import binanceLogo from "../assets/binance-h.png";
import Container from "./Container";
import Image from "next/image";
import { Button } from "./ui/button";
import displayIcon from "../assets/icons/display-icon.svg";
import nightIcon from "../assets/icons/night-icon.svg";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
        <Image
          src={binanceLogo}
          alt="Binance Logo"
          className="logo"
          width={125}
          height={125}
        />
        <div className="space-x-2 flex items-center">
          <Button
            className="bg-customGrey hover:bg-customGrey hover:backdrop-blur-md text-white   text-sm font-semibold hover:filter hover:brightness-90"
            asChild
          >
            <Link
              href={
                "https://accounts.binance.com/en/login?loginChannel=&return_to="
              }
            >
              Log In
            </Link>
          </Button>
          <Button
            className="bg-customYellow hover:bg-customYellow hover:backdrop-blur-md text-customBlack text-sm font-semibold hover:filter hover:brightness-90"
            asChild
          >
            <Link
              href={
                "https://accounts.binance.com/en/register?registerChannel=&return_to="
              }
            >
              Sign Up
            </Link>
          </Button>
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

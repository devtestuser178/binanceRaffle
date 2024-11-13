"use client";
import React from "react";
import { motion } from "framer-motion";
import binanceLogo from "../assets/binance-h.png";
import Image from "next/image";
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
      className="py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className=""
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={binanceLogo}
          alt="Binance Logo"
          className="logo"
          width={200}
          height={200}
        />
      </motion.div>
    </motion.div>
  );
};

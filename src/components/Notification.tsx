import React from "react";
import Container from "./Container";
import Image from "next/image";
import telegramIcon from "../assets/icons/telegram.svg";
import Link from "next/link";

const Notification = () => {
  return (
    <section className="w-full hidden md:block p-3 bg-[#2d2a20]">
      <Link
        href="https://t.me/BinanceExchange"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Container className="flex items-center justify-center space-x-2 ">
          <Image
            className="p-2 bg-[#2babee] rounded-full"
            src={telegramIcon}
            height={27}
            width={27}
            alt="telegram-icon"
          ></Image>
          <p className="text-slate-100 text-sm font-medium">
            Join our telegram community
          </p>
        </Container>
      </Link>
    </section>
  );
};

export default Notification;

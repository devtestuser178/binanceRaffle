import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Container from "./Container";

const Banner = () => {
  return (
    <section className="text-slate-200 py-2 ">
      <div className="bg-gray-800 p-6">
        <Container className="flex flex-col items-center justify-center space-y-4">
          <div className="space-y-4 text-center font-bold">
            <p>For Verified Users</p>
            <span>
              Get up to <span className="text-customYellow">100 USD</span> worth
              of rewards
            </span>
          </div>
          <Button
            asChild
            className="px-6 py-3  bg-customAltYellow hover:bg-customAltYellow/90 min-w-fit w-56 text-customBlack text-sm 
            font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Link
              className=""
              href={"https://www.binance.com/register?registerChannel=homepage"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="text-customBlack font-bold"> {"Sign Up Now"}</p>
            </Link>
          </Button>
        </Container>
      </div>
    </section>
  );
};

export default Banner;

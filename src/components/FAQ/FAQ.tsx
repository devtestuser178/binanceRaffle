import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Container from "../Container";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is a cryptocurrency exchange?",
      answer: (
        <div>
          <Link
            href="https://www.binance.com/en/price"
            className="hover:underline text-customYellow"
          >
            {"Cryptocurrency "}
          </Link>

          {
            "exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume."
          }
        </div>
      ),
    },
    {
      question: "How do I get started?",
      answer:
        "To get started, create an account, and you'll be able to access the dashboard with all the features available.",
    },
    {
      question: "What is the pricing?",
      answer: "We offer a free trial and a premium plan for advanced features.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use end-to-end encryption and adhere to best security practices.",
    },
  ];

  return (
    <section className="p-4 py-20 bg-transparent text-slate-200">
      <Container>
        <h2 className="text-slate-200 text-center  font-bold text-2xl md:text-4xl py-4 pb-2 md:pb-16 ">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className=" ">
                <div className="flex items-center justify-center space-x-4 font-semibold text-slate-300">
                  <span className="border border-slate-700 rounded-lg text-xs px-2  md:text-xl ">
                    {index + 1}
                  </span>
                  <span className="md:text-xl"> {item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="md:text-md text-slate-400 te px-12">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;

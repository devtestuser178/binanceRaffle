import { Nav } from "@/components/Nav";
import Hero from "@/components/Hero";
import Notification from "@/components/Notification";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="bg-gradient-to-b bg-customBlack  h-full">
        <Notification />
        <Hero />
        <FAQ />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

import { Nav } from "@/components/Nav";
import Hero from "@/components/Hero";
import Notification from "@/components/Notification";
import FAQ from "@/components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="bg-gradient-to-b bg-customBlack  h-full">
        <Notification />
        <Hero />
        <FAQ />
      </div>
    </>
  );
}

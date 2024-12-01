import { Nav } from "@/components/Nav";
import Hero from "@/components/Hero";
import Notification from "@/components/Notification";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className=" bg-customAltBlack h-full">
        <Notification />
        <Hero />
      </div>
    </>
  );
}

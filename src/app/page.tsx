import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ConstellationDAG from "@/components/ConstellationDAG";
import Reframe from "@/components/Reframe";
import HowWeWork from "@/components/HowWeWork";
import Evidence from "@/components/Evidence";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ConstellationDAG />
        <Reframe />
        <HowWeWork />
        <Evidence />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

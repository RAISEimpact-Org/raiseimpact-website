import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ConstellationDAG from "@/components/ConstellationDAG";
import Reframe from "@/components/Reframe";
import HowWeWork from "@/components/HowWeWork";
import Evidence from "@/components/Evidence";
import Testimonial from "@/components/Testimonial";
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
        <Testimonial
          surface
          photo="/charbel.jpg"
          name="Charbel Segerie"
          titleLines={[
            "Executive Director and Cofounder",
            "The French Center for AI Safety (CeSIA)",
          ]}
          quote="Working with Adam and the RAISEimpact team is always a boost of motivation and clarity. They quickly got to the most central and important bottlenecks of our organization, and surfaced mistakes that could have been critical. They supported us in getting through a funding crunch and helped us form our strategy for managing our team through that difficult situation. Their recommendations on HR and fundraising helped us with operational challenges and positioned ourselves to execute our Global Call for AI Red Lines campaign with greater impact. We highly recommend working with RAISEimpact."
        />
        <HowWeWork />
        <Testimonial
          photo="/david.webp"
          name="David Conrad"
          titleLines={["Managing Director", "Talos Network"]}
          quote="Working with RAISEimpact gave us the space and structure to step back and think strategically about our long-term direction. They helped us clarify our vision and sharpen our theory of change, both through leadership workshops and in helping us design sessions at our team strategy retreat. This strategic thinking has helped us to refine our organisational direction for the coming years, and has been invaluable in major fundraising conversations. We'd highly recommend working with them."
        />
        <Evidence />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

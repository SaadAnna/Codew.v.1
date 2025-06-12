import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Technology } from "./sections/Technology";
import { Services } from "./sections/Services";
import { Whyus } from "./sections/Whyus";
import { Pricing } from "./sections/Pricing"
import { Contact } from "./sections/Contact";
import { Work } from "./sections/Work"
export default function Home() {
  return (
    <div className="bg-black">
    <Navbar />
    <Hero />
    <Technology />
    <Services />
    <Whyus />
    <Work />
    <Pricing />
    <Contact />
    </div>
  );
}

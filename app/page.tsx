import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Technology } from "./sections/Technology";
import { Services } from "./sections/Services";

export default function Home() {
  return (
    <div className="bg-black">
    <Navbar />
    <Hero />
    <Technology />
    <Services />
    </div>
  );
}

import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Technology } from "./sections/Technology";

export default function Home() {
  return (
    <div className="bg-black">
    <Navbar />
    <Hero />
    <Technology />
    </div>
  );
}

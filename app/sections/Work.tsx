import ProjectOne from "@/public/projectone.png";
import ProjectTwo from "@/public/projecttwo.png";
import ProjectThree from "@/public/projectthree.png";
import Image from "next/image";
const Works = [
  {
    id: 1,
    title: "Ai Seo Genarator",
    description:
      "A clean, mobile-friendly SaaS landing page designed to boost sign-ups. Features SEO-optimized content, lightning-fast speed, and a persuasive UX to maximize conversions.",
    fullproject: "Full Project",
    projectlink: "https://dester.vercel.app/",
    githublinkproject: "https://github.com/SaadAnna/Ai-SEO-Landing-Page.git",
    githbulink: "Github Code",
    image: ProjectOne,
  },
  {
    id: 2,
    title: "Temse",
    description:
      "A high-performance online store homepage designed to boost sales. Features SEO-optimized product displays, intuitive navigation, and mobile-first design for seamless shopping.",
    fullproject: "Full Project",
    projectlink: "https://temse.netlify.app/",
    githublinkproject: "https://github.com/SaadAnna/temse-shop.git",
    githbulink: "Github Code",
    image: ProjectTwo,
  },
  {
    id: 3,
    title: "Shopify App.",
    description:
      "A custom Shopify app interface built for speed, conversions, and merchant success. Features clean UI, responsive design, and API integrations for a frictionless user experience.",
    fullproject: "Full Project",
    projectlink: "https://www.shopify.com/",
    githublinkproject: "https://github.com/SaadAnna/export-Thingws.git",
    githbulink: "Github Code",
    image: ProjectThree,
  },
];
export const Work = () => {
  return (
    <section className="py-24">
      <div className="px-4  lg:max-w-4xl max-w-4xl mx-auto flex flex-col gap-16 items-center overflow-hidden relative ">
        <h1 className="text-4xl md:text-[45px] mx-auto md:leading-none max-w-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Projects We’ve Built{" "}
        </h1>
        <div className="mt-6 grid grid-rows-3 gap-7">
          {Works.map((work) => (
            <div
              key={work.id}
              className="flex flex-wrap items-center gap-3.5 p-3.5 bg-neutral-950 border border-white/5 rounded-xl cursor-pointer transition-300 hover:bg-white/4"
            >
              <div className="flex flex-col text-start gap-5">
                <h1 className="text-4xl max-w-xl text-white font-medium ">
                  {work.title}
                </h1>
                <p className="text-base max-w-xs text-white/45 font-medium ">
                  {work.description}
                </p>
                <div className="flex gap-3 items-center">
                  <a
                    href={work.projectlink}
                    target="_blank"
                    className="text-black p-2 text-base bg-white rounded-full"
                  >
                    {work.fullproject}
                  </a>
                  <a
                    href={work.githublinkproject}
                    target="_blank"
                    className="text-white/20 text-base transition-all font-medium ease-in hover:text-white"
                  >
                    {work.githbulink}
                  </a>
                </div>
              </div>
              <Image
                width={350}
                height={280}
                src={work.image}
                alt="project image"
                className=" object-fill rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Work;

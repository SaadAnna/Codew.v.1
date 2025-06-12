const Works = [
  {
    id: 1,
    title: "Ai Seo Genarator Landing Page",
    description:
      "The AI SEO Generator Landing Page showcases an AI tool for creating optimized SEO content. It highlights features, benefits, and includes a call-to-action for user engagement.",
    fullproject: "Full Project",
    githbulink: "Github Code",
    image: "Image EXample",
  },
  {
    id: 2,
    title: "Temse",
    description:
      "A sleek, responsive landing page built with React.js, Vite, Tailwind CSS, and JavaScript. It highlights services, expertise, and includes a call-to-action to attract clients.e",
    fullproject: "Full Project",
    githbulink: "Github Code",
    image: "Image EXample",
  },
  {
    id: 3,
    title: "Codew",
    description:
      "A sleek, responsive landing page built with React.js, Vite, Tailwind CSS, and JavaScript. It highlights services, expertise, and includes a call-to-action to attract clients.",
    fullproject: "Full Project",
    githbulink: "Github Code",
    image: "Image EXample",
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
              className="flex justify-between items-center gap-3.5 p-3.5 bg-neutral-950 border border-white/5 rounded-xl cursor-pointer transition-300 hover:bg-white/4"
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
                    href="#"
                    className="text-black p-2 text-base bg-white rounded-full"
                  >
                    {work.fullproject}
                  </a>
                  <a
                    href="#"
                    className="text-white/20 text-base transition-all font-medium ease-in hover:text-white"
                  >
                    {work.githbulink}
                  </a>
                </div>
              </div>
              <h1 className="text-4xl max-w-xl text-white">{work.image}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Work;

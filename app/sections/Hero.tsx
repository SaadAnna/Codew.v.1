export const Hero = () => {
  return (
    <div className="py-24">
      <div className="px-4 md:px-0 lg:max-w-4xl max-w-4xl mx-auto flex flex-col items-center overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <h1 className="text-5xl md:text-[70px] md:leading-none font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Front-End Web Development Services for Modern, Responsive Websites
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center lg:max-w-2xl max-w-4xl mx-auto">
          We build fast, responsive, and SEO-friendly websites using HTML, CSS,
          JavaScript, and React.
        </p>
        <a href="#" className="bg-neutral-900 px-7 py-2 mt-4 border border-white/15 rounded-full cursor-pointer text-white font-medium text-lg">Contact</a>
      </div>
    </div>
  );
};

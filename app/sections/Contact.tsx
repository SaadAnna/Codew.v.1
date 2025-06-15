export const Contact = () => {
  return (
    <section className="py-24" id="contact">
      <div className="px-4  lg:max-w-4xl max-w-4xl mx-auto flex flex-col items-center overflow-hidden relative">
        <h1 className="text-4xl md:text-[45px] mx-auto md:leading-none max-w-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Let&apos;s work together{" "}
        </h1>

        <div className="mt-6 gap-3 mx-auto flex flex-col p-5 border border-white/20 rounded-xl ">
          <div className="flex gap-5 flex-wrap items-center">
            <input
              type="text"
              required
              className="w-auto h-14 border border-white/4 rounded-xl placeholder:text-white/15 placeholder:text-sm"
              placeholder="Fist name..."
            />
            <input
              type="text"
              required
              className="w-auto h-14 border border-white/4 rounded-xl placeholder:text-white/15 placeholder:text-sm"
              placeholder="Last name..."
            />
          </div>
          <input
            type="email"
            required
            className="w-auto h-14 border border-white/4 rounded-xl placeholder:text-white/15 placeholder:text-sm"
            placeholder="Your Email..."
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

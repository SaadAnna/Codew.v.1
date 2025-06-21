export const Contact = () => {
  return (
    <section className="py-24" id="contact">
      <div className="px-4  lg:max-w-4xl max-w-4xl mx-auto flex flex-col items-center overflow-hidden relative">
        <h1 className="text-4xl md:text-[45px] mx-auto md:leading-none max-w-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Let&apos;s work together {" "}
        </h1>

        <div className="mt-6 gap-3 mx-auto flex flex-col p-5 border border-white/20 rounded-xl ">
          <div className="flex gap-5 flex-wrap items-center">
            <input
              type="text"
              required
              className="w-auto h-14 pl-3 border border-white/4 rounded-xl placeholder:text-white/45 placeholder:text-sm focus:border-white/20 focus:outline-none"
              placeholder="Fist name..."
            />
            <input
              type="text"
              required
              className="w-auto h-14 pl-3 border border-white/4 rounded-xl placeholder:text-white/45 placeholder:text-sm focus:border-white/20 focus:outline-none"
              placeholder="Last name..."
            />
          </div>
          <input
            type="email"
            required
            className="w-auto h-14 pl-3 border border-white/4 rounded-xl placeholder:text-white/45 placeholder:text-sm focus:border-white/20 focus:outline-none"
            placeholder="Your Email..."
          />
          <textarea
            required
            className="w-auto h-20 pl-3 border border-white/4 rounded-xl placeholder:text-white/45 placeholder:text-sm focus:border-white/20 focus:outline-none"
            placeholder="Subject..."
          />
                <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-950 to-purple-800 text-white font-medium hover:from-purple-950 hover:to-purple-700 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-70 justify-start"
              >
                Send Message
              </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

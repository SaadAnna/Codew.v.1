export const Contact = () => {
  return (
    <section className="py-24" id="contact">
      <div className="px-4  lg:max-w-4xl max-w-4xl mx-auto flex flex-col items-center overflow-hidden relative">
        <h1 className="text-4xl md:text-[45px] mx-auto md:leading-none max-w-2xl font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Let&apos;s work together {" "}
        </h1>

        <div className="mt-14 gap-3 mx-auto flex flex-col p-5 border border-white/20 rounded-sm ">
          <div className="flex gap-5 flex-wrap items-center">
          <div className="flex flex-col text-start ">
          <label className="block text-base font-medium mb-2">
          First name
          </label>
            <input
              type="text"
              required
              className="w-auto h-14 pl-3 border border-white/4 rounded-xl placeholder:text-white/45 placeholder:text-sm focus:border-white/20 focus:outline-none"
              placeholder="Fist name..."
            />
            </div>
            <div className="flex flex-col text-start ">
            <label className="block text-base font-medium mb-2">
          Last name
          </label>
            <input
              type="text"
              required
              className="w-auto h-14 pl-3 border border-white/4 rounded-xl placeholder:text-white/45 placeholder:text-sm focus:border-white/20 focus:outline-none"
              placeholder="Last name..."
            />
            </div>
          </div>
          <div className="flex flex-col text-start" >

          <label className="block text-base font-medium mb-2">
         Email
          </label>
          <input
            type="email"
            required
            className="w-auto h-14 pl-3 border border-white/4 rounded-xl placeholder:text-white/45 placeholder:text-sm focus:border-white/20 focus:outline-none"
            placeholder="Your Email..."
          />
          </div>
          <div className="flex flex-col text-start">
          <label className="block text-base font-medium mb-2">
         Message
          </label>
          <textarea
            required
            className="w-auto h-20 pl-3 border border-white/4 rounded-xl placeholder:text-white/45 placeholder:text-sm focus:border-white/20 focus:outline-none"
            placeholder="Subject..."
          />
          </div>
                <button
                type="submit"
                className="px-8 py-3 rounded-lg cursor-pointer focus:outline-none bg-gradient-to-r from-purple-950 to-purple-800 text-white font-medium hover:from-purple-950 hover:to-purple-700 "
              >
                Send
              </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

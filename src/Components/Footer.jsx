import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-16 px-4 flex flex-col items-center">

      {/* Footer Heading */}
      <h2 className="text-3xl font-bold mb-2 tracking-wide">Let's Work Together</h2>
      <p className="text-gray-300 max-w-xl text-center mb-10">
        Got a project or collaboration in mind? Feel free to reach out.
      </p>

      {/* Contact Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 flex flex-col gap-5">

        {/* Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Name</label>
          <input
            className="bg-white/80 text-black px-4 py-2 rounded-lg outline-none 
                       focus:ring-2 focus:ring-cyan-300"
            type="text"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Email</label>
          <input
            className="bg-white/80 text-black px-4 py-2 rounded-lg outline-none
                       focus:ring-2 focus:ring-cyan-300"
            type="email"
            placeholder="Your email"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Message</label>
          <textarea
            className="bg-white/80 text-black px-4 py-2 rounded-lg h-28 resize-none outline-none 
                       focus:ring-2 focus:ring-cyan-300"
            placeholder="Write your message…"
          />
        </div>

        {/* Button */}
        <button
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition-all py-3 rounded-xl 
                     font-bold text-black active:scale-95"
        >
          Send Message
        </button>
      </div>

      {/* Bottom Copy */}
      <p className="text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Helix — All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;
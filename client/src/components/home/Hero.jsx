import React, { useState } from "react";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];

  return (
    <>
      <div className="min-h-screen pb-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
          <a
            href="#"
            className="relative bg-gradient-to-r px-2 pb-1 rounded-md from-indigo-500 to-purple-600 hover:from-indigo-600 shadow-[12px_12px_30px_rgba(99,102,241,0.5),-12px_12px_30px_rgba(168,85,247,0.5),0_20px_50px_rgba(0,0,0,0.7),8px_-8px_25px_rgba(236,72,153,0.3),-8px_-8px_25px_rgba(59,130,246,0.3)] hover:shadow-[16px_16px_40px_rgba(99,102,241,0.7),-16px_16px_40px_rgba(168,85,247,0.7),0_25px_60px_rgba(0,0,0,0.9),12px_-12px_35px_rgba(236,72,153,0.5),-12px_-12px_35px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300 border-2 border-indigo-400/40"
          >
            <img
              src="/logo.svg"
              alt="logo"
              className="h-11 w-auto drop-shadow-2xl relative z-10"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-200">
            <a href="#" className="hover:text-purple-400 transition">
              Home
            </a>
            <a href="#features" className="hover:text-purple-400 transition">
              Features
            </a>
            <a
              href="#testimonials"
              className="hover:text-purple-400 transition"
            >
              Testimonials
            </a>
            <a href="#cta" className="hover:text-purple-400 transition">
              Contact
            </a>
          </div>

          <div className="flex gap-2">
            <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition-all rounded-full text-white font-medium shadow-lg hover:shadow-xl">
              Get started
            </button>
            <button className="hidden md:block px-6 py-2 border border-slate-500 active:scale-95 hover:bg-slate-700/50 transition-all rounded-full text-slate-200 hover:text-white">
              Login
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition text-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[100] bg-black/60 text-white backdrop-blur-md flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-purple-400 transition"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-purple-400 transition"
          >
            Features
          </a>
          <a
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-purple-400 transition"
          >
            Testimonials
          </a>
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-purple-400 transition"
          >
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="active:ring-3 active:ring-purple-400 aspect-square size-10 p-1 items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition text-white rounded-md flex"
          >
            X
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40">
          <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-[120px] opacity-25"></div>

          {/* Avatars + Stars */}
          <div className="flex items-center mt-24 gap-4">
            <div className="flex -space-x-3 pr-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 object-cover rounded-full border-2 border-slate-700 hover:-translate-y-0.5 transition z-[1]"
              />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="user1"
                className="size-8 object-cover rounded-full border-2 border-slate-700 hover:-translate-y-0.5 transition z-[2]"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="user2"
                className="size-8 object-cover rounded-full border-2 border-slate-700 hover:-translate-y-0.5 transition z-[3]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 object-cover rounded-full border-2 border-slate-700 hover:-translate-y-0.5 transition z-[4]"
              />
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="user5"
                className="size-8 rounded-full border-2 border-slate-700 hover:-translate-y-0.5 transition z-[5]"
              />
            </div>

            <div>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star text-transparent fill-yellow-400"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>
              <p className="text-sm text-slate-400">Trusted by 10+ users</p>
            </div>
          </div>

          {/* Headline + CTA */}
          <h1 className="text-5xl md:text-6xl font-bold max-w-5xl text-center mt-8 md:leading-[70px] text-white">
            <p>Land your dream job with</p>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-powered
            </span>{" "}
            Resume.
          </h1>

          <p className="max-w-md text-center text-base my-8 text-slate-300">
            Create, edit, share, and download beautiful resumes in minutes with
            AI-powered assistance and professional templates.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full px-9 h-12 ring-offset-2 ring-2 ring-indigo-400/50 flex items-center transition-all active:scale-95 font-medium shadow-lg hover:shadow-2xl">
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button className="flex items-center gap-2 border border-slate-500 hover:bg-slate-700/50 hover:border-slate-400 transition rounded-full px-8 h-12 text-slate-200 font-medium active:scale-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-video size-5"
                aria-hidden="true"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                <rect x="2" y="6" width="14" height="12" rx="2"></rect>
              </svg>
              <span>Try demo</span>
            </button>
          </div>

          <p className="py-8 text-slate-400 mt-16 font-medium">
            Trusted by leading brands
          </p>

          <div className="flex flex-wrap justify-between max-sm:justify-center gap-8 max-w-4xl w-full mx-auto py-6">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="company logo"
                className="h-6 w-auto max-w-xs opacity-60 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

          * {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default Hero;

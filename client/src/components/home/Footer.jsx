import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-t rounded-t-lg">
        <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
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
          <div>
            <p className="text-white font-semibold mb-3">Product</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition"
                >
                  Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Resources</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition inline-flex items-center gap-2"
                >
                  Careers
                  <span className="text-[10px] font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md px-2 py-0.5">
                    We're hiring!
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Legal</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-indigo-400 transition"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
          <p className="max-w-60 text-slate-400 leading-relaxed">
            Making every customer feel valued—no matter the size of your
            audience.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://profile-ruby-eight.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition"
            >
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
                className="size-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/lepharam-ramchiary-576282215"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition"
            >
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
                className="size-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://github.com/LepharamRamchiary"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.94c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.39-3.88-1.39a3.07 3.07 0 0 0-1.28-1.69c-1.05-.72.08-.7.08-.7a2.44 2.44 0 0 1 1.77 1.19 2.47 2.47 0 0 0 3.38 1 2.46 2.46 0 0 1 .73-1.56c-2.56-.29-5.25-1.28-5.25-5.67A4.44 4.44 0 0 1 6.1 8.28a4.13 4.13 0 0 1 .11-3.05s.97-.31 3.17 1.19a10.94 10.94 0 0 1 5.77 0c2.2-1.5 3.17-1.19 3.17-1.19a4.13 4.13 0 0 1 .11 3.05 4.44 4.44 0 0 1 1.18 3.06c0 4.4-2.7 5.37-5.27 5.66a2.77 2.77 0 0 1 .79 2.15v3.19c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-slate-500 text-center">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://profile-ruby-eight.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition"
            >
              Lepharam Ramchiary
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

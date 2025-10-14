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
          <a href="https://prebuiltui.com" className="hover:opacity-80 transition">
            <svg
              width="31"
              height="34"
              viewBox="0 0 31 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m8.75 5.3 6.75 3.884 6.75-3.885M8.75 28.58v-7.755L2 16.939m27 0-6.75 3.885v7.754M2.405 9.408 15.5 16.954l13.095-7.546M15.5 32V16.939M29 22.915V10.962a2.98 2.98 0 0 0-1.5-2.585L17 2.4a3.01 3.01 0 0 0-3 0L3.5 8.377A3 3 0 0 0 2 10.962v11.953A2.98 2.98 0 0 0 3.5 25.5L14 31.477a3.01 3.01 0 0 0 3 0L27.5 25.5a3 3 0 0 0 1.5-2.585"
                stroke="url(#a)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="15.5"
                  y1="2"
                  x2="15.5"
                  y2="32"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#818CF8" />
                  <stop offset="1" stopColor="#C084FC" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <div>
            <p className="text-white font-semibold mb-3">Product</p>
            <ul className="space-y-2.5">
              <li>
                <a href="/" className="text-slate-400 hover:text-indigo-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-indigo-400 transition">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-indigo-400 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-indigo-400 transition">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Resources</p>
            <ul className="space-y-2.5">
              <li>
                <a href="/" className="text-slate-400 hover:text-indigo-400 transition">
                  Company
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-indigo-400 transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-indigo-400 transition">
                  Community
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-indigo-400 transition inline-flex items-center gap-2">
                  Careers
                  <span className="text-[10px] font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md px-2 py-0.5">
                    We're hiring!
                  </span>
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-indigo-400 transition">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">Legal</p>
            <ul className="space-y-2.5">
              <li>
                <a href="/" className="text-slate-400 hover:text-indigo-400 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/" className="text-slate-400 hover:text-indigo-400 transition">
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
              href="https://dribbble.com/prebuiltui"
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
              href="https://www.linkedin.com/company/prebuiltui"
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
              href="https://x.com/prebuiltui" 
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@prebuiltui"
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
                className="size-6"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
          </div>
          <p className="mt-4 text-slate-500 text-center">
            © 2025 <a href="https://prebuiltui.com" className="text-slate-400 hover:text-indigo-400 transition">PrebuiltUI</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
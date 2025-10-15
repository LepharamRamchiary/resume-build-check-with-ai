import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = { name: "lepharm" };

  const logoutUser = () => {
    console.log("Logging out...");
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="relative bg-gradient-to-r px-2 pb-1 rounded-md from-indigo-500 to-purple-600 hover:from-indigo-600 shadow-[12px_12px_30px_rgba(99,102,241,0.5),-12px_12px_30px_rgba(168,85,247,0.5),0_20px_50px_rgba(0,0,0,0.7),8px_-8px_25px_rgba(236,72,153,0.3),-8px_-8px_25px_rgba(59,130,246,0.3)] hover:shadow-[16px_16px_40px_rgba(99,102,241,0.7),-16px_16px_40px_rgba(168,85,247,0.7),0_25px_60px_rgba(0,0,0,0.9),12px_-12px_35px_rgba(236,72,153,0.5),-12px_-12px_35px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300 border-2 border-indigo-400/40"
          >
            <img
              src="/logo.svg"
              alt="logo"
              className="h-11 w-auto drop-shadow-2xl relative z-10"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <p className="text-slate-200 font-medium">Hi, {user?.name}</p>
            </div>
            <button
              onClick={logoutUser}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full active:scale-95 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-200 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-48 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-4 border-t border-white/10">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-lg">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <p className="text-slate-200 font-medium">Hi, {user?.name}</p>
            </div>
            <button
              onClick={logoutUser}
              className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-2.5 rounded-full active:scale-95 transition-all duration-200 font-medium shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

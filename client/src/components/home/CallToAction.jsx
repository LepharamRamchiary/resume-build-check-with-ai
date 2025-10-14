import { Link2OffIcon } from "lucide-react";
import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 w-full py-20">
      <div className="border-y border-dashed border-slate-700 w-full max-w-5xl mx-auto px-10 sm:px-16">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-700 py-16 sm:py-20 -mt-10 -mb-10 w-full">
          <p className="text-xl font-medium max-w-md text-white">
            Build a Professional Resume That Helps You Stand Out and Get Hired
          </p>
          <Link
            to="/dashboard?state=register"
            className="flex items-center gap-2 rounded py-3 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition text-white"
          >
            <span>Get Started</span>
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
              className="size-4.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

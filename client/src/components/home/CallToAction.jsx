import { Link } from "react-router-dom";
import React from "react";

const CallToAction = () => {
  return (
    <div
      id="cta"
      className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 w-full py-20"
    >
      <div className="border-y border-dashed border-slate-700 w-full max-w-5xl mx-auto px-10 sm:px-16">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-700 py-16 sm:py-20 -mt-10 -mb-10 w-full">
          <p className="text-xl font-medium max-w-md text-white">
            Connect with me
          </p>
          <a
            href="https://www.linkedin.com/in/lepharam-ramchiary-576282215"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 rounded py-3 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition text-white"
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
            <div className="flex items-center gap-2">
              <span>LinkedIn</span>
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
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

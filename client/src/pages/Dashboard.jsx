import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets.js";

const Dashboard = () => {
  const [allResumes, setAllResumes] = useState([]);

  const loadResumes = async () => {
    setAllResumes(dummyResumeData);
  };

  useEffect(() => {
    loadResumes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome, Lepharam
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Get started by creating a new resume or uploading an existing one
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <button className="group relative bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-indigo-500/50 rounded-2xl p-8 sm:p-10 h-56 sm:h-64 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-2xl shadow-lg group-hover:shadow-indigo-500/50 group-hover:scale-110 transition-all duration-300">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <p className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors duration-300">
                Create Resume
              </p>
              <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Start from scratch
              </p>
            </div>
          </button>

          <button className="group relative bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-purple-500/50 rounded-2xl p-8 sm:p-10 h-56 sm:h-64 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <p className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                Upload Existing
              </p>
              <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Import your resume
              </p>
            </div>
          </button>

          <button className="group relative bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-pink-500/50 rounded-2xl p-8 sm:p-10 h-56 sm:h-64 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 bg-gradient-to-br from-pink-500 to-pink-600 p-4 rounded-2xl shadow-lg group-hover:shadow-pink-500/50 group-hover:scale-110 transition-all duration-300">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <p className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-pink-300 transition-colors duration-300">
                Browse Templates
              </p>
              <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                Choose a design
              </p>
            </div>
          </button>
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Recent Resumes
            </h2>
            <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
              View all →
            </button>
          </div>

          {allResumes.length === 0 ? (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm sm:text-base">
                  No resumes yet. Create your first resume to get started!
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {allResumes.map((resume, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 bg-white rounded-lg aspect-[3/4] mb-4 overflow-hidden shadow-lg">
                    <div className="p-4 space-y-2">
                      <div className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded w-3/4"></div>
                      <div className="h-2 bg-slate-300 rounded w-1/2"></div>
                      <div className="h-2 bg-slate-200 rounded w-full mt-4"></div>
                      <div className="h-2 bg-slate-200 rounded w-full"></div>
                      <div className="h-2 bg-slate-200 rounded w-4/5"></div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-white font-semibold text-base mb-1 truncate group-hover:text-indigo-300 transition-colors">
                      {resume?.title || "Untitled Resume"}
                    </h3>
                    <p className="text-slate-400 text-xs mb-3 truncate">
                      {resume?.personal_info?.email || "No email"}
                    </p>

                    <div className="flex items-center gap-2">
                      <button className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 text-xs py-2 rounded-lg transition-colors">
                        Edit
                      </button>
                      <button className="flex-1 bg-white/10 hover:bg-white/20 text-white text-xs py-2 rounded-lg transition-colors">
                        Download
                      </button>
                      <button className="bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs py-2 px-3 rounded-lg transition-colors">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 z-20 bg-indigo-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    New
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

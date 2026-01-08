import React, { useState } from "react";
import Title from "./Title";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: (
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
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "AI-Powered Content Generation",
      description:
        "Leverage advanced AI technology to instantly generate compelling professional summaries, job descriptions, and achievement statements tailored to your experience.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: (
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
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="15" x2="15" y2="15" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      ),
      title: "Professional Templates",
      description:
        "Choose from 50+ ATS-optimized resume templates designed by professional recruiters. Each template is crafted to pass automated screening systems while impressing hiring managers.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: (
        <svg
          className="size-6"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M9 10h.01" />
          <path d="M12 10h.01" />
          <path d="M15 10h.01" />
        </svg>
      ),
      title: "Real-Time Suggestions",
      description:
        "Get instant AI recommendations on keyword optimization, formatting improvements, and industry-specific phrases to make your resume stand out to recruiters.",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: (
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
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
      title: "One-Click Downloads",
      description:
        "Export your resume in multiple formats including PDF, DOCX, and TXT. Download instantly and apply to jobs with a single click from your dashboard.",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <div
      id="features"
      className="py-20 sm:py-10 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen flex flex-col items-center justify-center"
    >
      {/* Top Section - Badge, Title & Description */}
      <div className="w-full max-w-5xl mx-auto mb-16 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-blue-300 bg-indigo-500/10 border border-indigo-400/30 rounded-full px-4 py-2 w-fit mx-auto mb-6">
          <svg
            width="16"
            height="16"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
              stroke="#6366f1"
              strokeMiterlimit="5.759"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-medium">Powerful Features</span>
        </div>

        <Title
          title="Build Your Dream Resume with "
          highlight=" AI Intelligence"
          description="Create a professional, ATS-optimized resume in minutes. Our AI-powered resume builder helps you highlight your best achievements and land your dream job faster."
        />
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto">
        {/* Left Side - Image with smooth animation */}
        <div className="w-full md:w-1/2 flex justify-center overflow-visible">
          <div className="w-full flex justify-center">
            <img
              className={`max-w-2xl w-full transition-all duration-700 ease-out ${
                activeFeature === 0
                  ? "translate-y-0"
                  : activeFeature === 1
                  ? "translate-y-6"
                  : activeFeature === 2
                  ? "translate-y-12"
                  : "translate-y-16"
              }`}
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
              alt="Resume Builder showcase"
            />
          </div>
        </div>

        {/* Right Side - Feature Cards */}
        <div className="w-full md:w-1/2 space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveFeature(index)}
              className="cursor-pointer group"
            >
              <div
                className={`p-6 rounded-2xl border-2 transition-all duration-700 ease-out transform ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.color} border-opacity-100 shadow-lg scale-100`
                    : `bg-slate-700/50 border-slate-600 hover:border-slate-500 hover:bg-slate-600/50 scale-95 opacity-70 hover:opacity-85`
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div
                    className={`p-3 rounded-xl flex-shrink-0 transition-all duration-700 ${
                      activeFeature === index
                        ? "bg-white/20"
                        : "bg-slate-600/50 group-hover:bg-slate-500/50"
                    }`}
                  >
                    <div
                      className={`${
                        activeFeature === index
                          ? "text-white"
                          : "text-slate-300"
                      }`}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3
                      className={`text-lg font-semibold transition-colors duration-700 ${
                        activeFeature === index
                          ? "text-white"
                          : "text-slate-300"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm mt-2 transition-all duration-700 max-h-24 overflow-hidden ${
                        activeFeature === index
                          ? "text-white/90 opacity-100"
                          : "text-slate-400 opacity-0 h-0"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Features;

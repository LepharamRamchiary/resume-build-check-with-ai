import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");
  const [state, setState] = useState(urlState || "login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col justify-center lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="sm:w-[420px] w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="text-center">
              <h1 className="text-gray-900 text-3xl sm:text-4xl font-bold tracking-tight">
                {state === "login" ? "Login" : "Sign up"}
              </h1>
              <p className="text-gray-500 text-sm mt-3">
                {state === "login"
                  ? "Please sign in to continue"
                  : "Create your account to get started"}
              </p>
            </div>

            {/* Name Input - Only for Sign Up */}
            {state !== "login" && (
              <div className="w-full mt-8">
                <label
                  htmlFor="name"
                  className="text-gray-700 text-sm font-medium mb-2 block text-left"
                >
                  Name
                </label>
                <div className="flex items-center w-full bg-white border border-gray-300/80 hover:border-gray-400 focus-within:border-indigo-500 h-12 rounded-full overflow-hidden px-4 gap-3 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 0 0-16 0" />
                  </svg>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm w-full h-full border-none ring-0"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}

            {/* Email Input */}
            <div className={`w-full ${state === "login" ? "mt-8" : "mt-5"}`}>
              <label
                htmlFor="email"
                className="text-gray-700 text-sm font-medium mb-2 block text-left"
              >
                Email
              </label>
              <div className="flex items-center w-full bg-white border border-gray-300/80 hover:border-gray-400 focus-within:border-indigo-500 h-12 rounded-full overflow-hidden px-4 gap-3 transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm w-full h-full border-none ring-0"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="w-full mt-5">
              <label
                htmlFor="password"
                className="text-gray-700 text-sm font-medium mb-2 block text-left"
              >
                Password
              </label>
              <div className="flex items-center w-full bg-white border border-gray-300/80 hover:border-gray-400 focus-within:border-indigo-500 h-12 rounded-full overflow-hidden px-4 gap-3 transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm w-full h-full border-none ring-0"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                >
                  {showPassword ? (
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password - Only for Login */}
            {state === "login" && (
              <div className="mt-4 text-left">
                <button
                  type="button"
                  className="text-sm text-indigo-500 hover:text-indigo-600 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="mt-6 w-full h-12 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:bg-indigo-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              {state === "login" ? "Login" : "Sign up"}
            </button>

            {/* Toggle Login/Sign Up */}
            <p className="text-gray-500 text-sm mt-6 text-center">
              {state === "login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() =>
                  setState((prev) => (prev === "login" ? "register" : "login"))
                }
                className="text-indigo-500 hover:text-indigo-600 font-medium hover:underline transition-colors"
              >
                {state === "login" ? "Sign up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

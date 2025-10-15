import React, { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* Left Side - Image */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              className="w-full h-auto object-cover" 
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png" 
              alt="Login illustration" 
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md bg-white/5 backdrop-blur-lg rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10">
            
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-4xl text-white font-bold tracking-tight">Login</h2>
              <p className="text-sm text-slate-300 mt-3">Welcome back! Please Login to continue</p>

              {/* Google Sign In */}
              <button 
                type="button" 
                className="w-full mt-8 bg-white hover:bg-slate-50 flex items-center justify-center h-12 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <img 
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" 
                  alt="Google logo" 
                  className="w-20 h-20 mr-2"
                />
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 w-full my-6">
                <div className="flex-1 h-px bg-slate-600"></div>
                <p className="text-xs text-slate-400 whitespace-nowrap">or sign in with email</p>
                <div className="flex-1 h-px bg-slate-600"></div>
              </div>

              {/* Email Input */}
              <div className="w-full">
                <label htmlFor="email" className="text-slate-300 text-sm font-medium mb-2 block">Email</label>
                <div className="flex items-center w-full bg-white/5 border border-slate-600 hover:border-slate-500 focus-within:border-indigo-500 h-12 rounded-xl overflow-hidden px-4 gap-3 transition-all duration-200">
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#94a3b8"/>
                  </svg>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-transparent text-white placeholder-slate-400 outline-none text-sm w-full h-full" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />                 
                </div>
              </div>

              {/* Password Input */}
              <div className="w-full mt-5">
                <label htmlFor="password" className="text-slate-300 text-sm font-medium mb-2 block">Password</label>
                <div className="flex items-center w-full bg-white/5 border border-slate-600 hover:border-slate-500 focus-within:border-indigo-500 h-12 rounded-xl overflow-hidden px-4 gap-3 transition-all duration-200">
                  <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#94a3b8"/>
                  </svg>
                  <input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password" 
                    className="bg-transparent text-white placeholder-slate-400 outline-none text-sm w-full h-full" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 hover:text-slate-300 transition-colors flex-shrink-0"
                  >
                    {showPassword ? (
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-3">
                <div className="flex items-center gap-2">
                  <input 
                    className="w-4 h-4 rounded accent-indigo-500 cursor-pointer" 
                    type="checkbox" 
                    id="checkbox" 
                  />
                  <label className="text-sm text-slate-300 cursor-pointer select-none" htmlFor="checkbox">
                    Remember me
                  </label>
                </div>
                <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button 
                onClick={handleSubmit}
                className="mt-8 w-full h-12 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 transition-all duration-200 shadow-lg hover:shadow-indigo-500/50 transform hover:scale-[1.02]"
              >
                Sign In
              </button>

              {/* Sign Up Link */}
              <p className="text-slate-300 text-sm mt-6 text-center">
                Don't have an account?{' '}
                <button className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
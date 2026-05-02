import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden dark">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Gritty Gym Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSmRl_X8hPOY1uyjKGuGujn6LVJd4RaoPJZ30WGtKHQOFsnEbOXNJWlNsCQItNMu-ZnFnvttoAbrtpJnqDazWqXOmIAr0r48yMjzvWrWxgE_-iOT5RuWkg5DS5N3oQiccY3T4Nu3prHCU2hsxQbAYtXpEL-7YBKbUNi9W0GPHTRPIHtnhqsfUFcriyS1X5-4Z_q7XLuNWiKZeo_rpmQmYvMBZQOKYHM9G9l7V7zoGKrqQsiti4qODGYhz4MjXpfY4XpQJczQHlxQ"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>

      {/* Content Container */}
      <section className="relative z-10 w-full max-w-[440px] px-container-margin py-xl flex flex-col items-center gap-xl">
        {/* Brand Identity */}
        <div className="flex flex-col items-center text-center space-y-md">
          <h1 className="font-display-xl text-[44px] italic tracking-tighter text-primary-container neon-glow leading-none">
            HIGH-VELOCITY
          </h1>
          <p className="font-label-caps text-on-surface-variant uppercase tracking-[0.2em] text-xs">
            Elite Performance Tracking
          </p>
        </div>

        {/* Login Form */}
        <div className="w-full space-y-lg">
          <div className="space-y-md">
            {/* Email Input */}
            <div className="group">
              <label className="font-label-caps text-on-surface-variant mb-xs block">Email Address</label>
              <div className="glass-panel rounded-xl flex items-center px-md py-md focus-within:border-primary-container transition-all duration-300">
                <span className="material-symbols-outlined text-on-surface-variant mr-md">mail</span>
                <input 
                  className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-on-surface-variant/40 font-body-md" 
                  placeholder="coach@highvelocity.fit" 
                  type="email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="group">
              <label className="font-label-caps text-on-surface-variant mb-xs block">Password</label>
              <div className="glass-panel rounded-xl flex items-center px-md py-md focus-within:border-primary-container transition-all duration-300">
                <span className="material-symbols-outlined text-on-surface-variant mr-md">lock</span>
                <input 
                  className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-on-surface-variant/40 font-body-md" 
                  placeholder="••••••••" 
                  type="password"
                />
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors">visibility</span>
              </div>
            </div>

            <div className="flex justify-end">
              <Link className="font-label-caps text-on-surface/60 hover:text-primary-container transition-colors text-[11px] uppercase" to="#">
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Primary Action */}
          <button className="w-full bg-primary-container text-on-primary font-display-xl text-headline-md py-md rounded-xl inner-glow active:scale-[0.98] transition-transform duration-200 uppercase tracking-tight">
            LOGIN
          </button>
        </div>

        {/* Social Authentication */}
        <div className="w-full space-y-md">
          <div className="flex items-center gap-md">
            <div className="h-[1px] flex-1 bg-white/10"></div>
            <span className="font-label-caps text-on-surface-variant text-[10px] uppercase">Or Continue With</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-2 gap-md">
            <button className="glass-panel rounded-xl py-md flex items-center justify-center gap-sm hover:bg-white/5 active:scale-95 transition-all">
              <img 
                alt="Google" 
                className="w-5 h-5 invert opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs7AkPD4MgDWBpQ84zATesc1Ib26qwbjHh56Az8c35EHGKUkgK7Wpym-QBtbouzMCpufrgH1C9SfKd_k8-nWwWLlWq1IeG1cNTJVL34s2PsYUHTwDneGFc43GLOmS6JoyodneCrx-Vqdd9uXLZj-tG41aOcGAJ63sJ52z5fqyY8H6F3UOcDw3wRL2QPP10WRbul2g6TGcQBRxUQOSHVzhKH3-M6UB3XwVRe8Vp_PiC3F-bvxFVzbdycGqymPGRVhUjQfMEUPz59g"
              />
              <span className="font-body-md text-sm font-semibold">Google</span>
            </button>
            <button className="glass-panel rounded-xl py-md flex items-center justify-center gap-sm hover:bg-white/5 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-on-surface text-xl">apple</span>
              <span className="font-body-md text-sm font-semibold">Apple</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-lg">
          <p className="font-body-md text-on-surface-variant text-sm">
            Don't have an account? 
            <Link className="text-primary-container font-bold ml-xs hover:underline decoration-2 underline-offset-4 transition-all" to="/signup">
              Sign Up
            </Link>
          </p>
        </footer>
      </section>

      {/* Decorative Elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
    </main>
  );
};

export default Login;

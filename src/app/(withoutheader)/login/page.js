"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/redux/hooks';
import axios from 'axios';
import { setToken } from '@/redux/slices/loginSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export default function Login() {
  let baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    axios.post(`${baseUrl}auth/login`, { email, password })
      .then((res) => {
        console.log(res.data._status);
       if(res.data._status){
        dispatch(setToken(res.data.token));
        router.push("/dashboard");
       }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8 relative transition-colors duration-500">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-8 right-8 z-[210] p-3 rounded-full bg-accent-dark/50 backdrop-blur-md hover:bg-accent-dark transition-all duration-300 border border-accent-dark shadow-xl group"
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? (
          <svg className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m9.75-9h-2.25M5.25 12H3m16.357-7.357l-1.591 1.591M6.414 17.586l-1.591 1.591M17.586 17.586l1.591 1.591M6.414 6.414l1.591-1.591M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
          </svg>
        )}
      </button>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-background border border-accent-dark rounded-2xl overflow-hidden shadow-2xl animate-fadeIn relative">

        {/* Visual Side */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-secondary text-background relative overflow-hidden transition-all duration-700">
          <div className="relative z-10">
            <Link href="/">
              <h2 className="text-3xl w-fit font-serif font-bold tracking-tighter hover:text-primary transition-colors">
                MONSTA<span className="text-primary">.</span>
              </h2>
            </Link>
          </div>

          <div className="relative z-10">
            <blockquote className="space-y-4">
              <p className="text-3xl font-serif leading-relaxed italic">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <footer className="text-primary font-medium tracking-[0.3em] uppercase text-[10px]">
                — Steve Jobs
              </footer>
            </blockquote>
          </div>

          {/* Abstract Shapes/Accents */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="40" strokeWidth="0.1" />
              <circle cx="50" cy="50" r="30" strokeWidth="0.1" />
              <path d="M10 50 L90 50" strokeWidth="0.1" />
              <path d="M50 10 L50 90" strokeWidth="0.1" />
            </svg>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-background transition-colors duration-700">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-secondary mb-3 transition-colors duration-500">Welcome Back</h1>
            <p className="text-text-muted text-[11px] tracking-[0.2em] uppercase font-bold">Access your exclusive dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-accent/30 dark:bg-accent-dark/30 border border-accent-dark rounded-none focus:outline-none focus:border-primary transition-all text-secondary placeholder:text-text-muted/50 text-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60" htmlFor="password">
                  Password
                </label>
                <Link href="/forgot-password" className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary hover:text-secondary transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 bg-accent/30 dark:bg-accent-dark/30 border border-accent-dark rounded-none focus:outline-none focus:border-primary transition-all text-secondary placeholder:text-text-muted/50 text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-3.5 h-3.5 border-accent-dark bg-accent/30 text-primary focus:ring-primary transition-all cursor-pointer accent-primary"
              />
              <label htmlFor="remember" className="text-[10px] uppercase tracking-[0.2em] text-text-muted cursor-pointer font-bold">Remember me</label>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-secondary text-background dark:text-secondary py-5 rounded-none font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-primary hover:text-background transition-all duration-500 shadow-xl hover:shadow-primary/20 group relative overflow-hidden"
            >
              <span className="relative z-10">Secure Login</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-accent-dark"></div>
              </div>
              <div className="relative flex justify-center text-[9px] uppercase tracking-[0.2em] font-bold">
                <span className="bg-background px-4 text-text-muted/60 transition-all duration-500">Registry Access</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="cursor-pointer flex items-center justify-center gap-3 px-4 py-4 bg-accent/20 border border-accent-dark hover:bg-accent/40 transition-all text-secondary group rounded-none">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Google</span>
              </button>
              <button type="button" className="cursor-pointer flex items-center justify-center gap-3 px-4 py-4 bg-accent/20 border border-accent-dark hover:bg-accent/40 transition-all text-secondary group rounded-none">
                <svg className="w-5 h-5 flex-shrink-0 fill-current group-hover:text-primary transition-colors" viewBox="0 0 24 24">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.82a3.405 3.405 0 00-.83 3.648c1.35.104 2.716-.624 3.117-1.638z" />
                </svg>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Apple ID</span>
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-text-muted/60 text-[10px] uppercase tracking-[0.2em] font-bold">
              New to Monsta?{' '}
              <Link href="/register" className="text-primary hover:text-secondary transition-colors underline underline-offset-4 pointer-events-auto">
                Apply for Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="fixed bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none whitespace-nowrap text-[20vh] font-serif font-black leading-none text-secondary transition-all duration-700">
        MONSTA MONSTA MONSTA MONSTA
      </div>
    </div>
  );
}

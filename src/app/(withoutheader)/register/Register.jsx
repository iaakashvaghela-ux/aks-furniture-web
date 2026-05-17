"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { useTheme } from '@/redux/hooks';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { apiBaseUrl } from '../../(withheader)/api-fetching/apiBaseUrl';

export default function Register() {
  let baseUrl = apiBaseUrl();
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // console.log("Registration attempt:", formData);

    axios.post(`${baseUrl}auth/register`, formData)
      .then(response => {
        console.log(response.data);
        if (response.data._status) {
          Cookies.set("token", response.data.token);
          router.push('/dashboard');
        }
      })
      .catch(error => {
        console.error(error);
      });
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
                "Apply for the Registry. Join the elite circle of artisanal curators."
              </p>
              <footer className="text-primary font-medium tracking-[0.3em] uppercase text-[10px]">
                — MONSTA CURATION TEAM
              </footer>
            </blockquote>
          </div>

          {/* Abstract Shapes/Accents */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        {/* Form Side */}
        <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-background transition-colors duration-700">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-secondary mb-3 transition-colors duration-500">Registry Acquisition</h1>
            <p className="text-text-muted text-[11px] tracking-[0.2em] uppercase font-bold">Apply for your exclusive collector account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Lumiere Beaufort"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-accent/30 dark:bg-accent-dark/30 border border-accent-dark rounded-none focus:outline-none focus:border-primary transition-all text-secondary placeholder:text-text-muted/50 text-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-accent/30 dark:bg-accent-dark/30 border border-accent-dark rounded-none focus:outline-none focus:border-primary transition-all text-secondary placeholder:text-text-muted/50 text-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-accent/30 dark:bg-accent-dark/30 border border-accent-dark rounded-none focus:outline-none focus:border-primary transition-all text-secondary placeholder:text-text-muted/50 text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-accent/30 dark:bg-accent-dark/30 border border-accent-dark rounded-none focus:outline-none focus:border-primary transition-all text-secondary placeholder:text-text-muted/50 text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-accent/30 dark:bg-accent-dark/30 border border-accent-dark rounded-none focus:outline-none focus:border-primary transition-all text-secondary placeholder:text-text-muted/50 text-sm"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-3.5 h-3.5 border-accent-dark bg-accent/30 text-primary focus:ring-primary transition-all cursor-pointer accent-primary"
                  required
                />
                <label htmlFor="terms" className="text-[9px] uppercase tracking-[0.2em] text-text-muted cursor-pointer font-bold">I agree to the Terms</label>
              </div>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary hover:text-secondary transition-colors"
              >
                {showPassword ? "Hide" : "Show"} Passwords
              </button>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-secondary text-background dark:text-secondary py-5 rounded-none font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-primary hover:text-background transition-all duration-500 shadow-xl hover:shadow-primary/20 group relative overflow-hidden"
            >
              <span className="relative z-10">Initialize Account</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </form>

          <div className="mt-12 text-center border-t border-accent-dark pt-8">
            <p className="text-text-muted/60 text-[10px] uppercase tracking-[0.2em] font-bold">
              Already have an account?{' '}
              <Link href="/login" className="text-primary hover:text-secondary transition-colors underline underline-offset-4 pointer-events-auto">
                Secure Login
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
  )
}

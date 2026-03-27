import React from 'react';

export default function NewsLetter() {
  return (
    <section className=" py-32 px-6 dark:bg-background ">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-secondary rounded-[2rem] overflow-hidden p-8 md:p-16 lg:p-24">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -mr-20 -skew-x-12"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 text-center lg:text-left">
            {/* Text Content */}
            <div className="lg:w-1/2 text-background transition-colors duration-500">
              <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4 md:mb-6">Stay Connected</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 md:mb-8 leading-tight">
                Join the Monsta Inner Circle
              </h2>
              <p className="text-base md:text-lg opacity-70 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Be the first to experience our newest artisanal collections and receive exclusive invitations to private seasonal events.
              </p>
            </div>

            {/* Form Area */}
            <div className="w-full lg:w-5/12">
              <form
                action="https://wscubetech.co/Assignments/furniture"
                method="POST"
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 relative group items-stretch sm:items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full px-8 py-5 md:py-7 bg-background/10 border border-background/20 rounded-[1.5rem] sm:rounded-full focus:border-primary focus:bg-background/20 outline-none transition-all duration-500 text-background placeholder:text-background/40 text-base md:text-lg sm:pr-40 lg:pr-44 xl:pr-48"
                    required
                  />
                  <button
                    type="submit"
                    className="sm:absolute sm:right-2 sm:top-2 sm:bottom-2 px-8 py-5 sm:py-0 bg-primary text-secondary font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] rounded-[1.5rem] sm:rounded-full hover:bg-background hover:text-secondary transition-all duration-300 shadow-xl"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-[10px] md:text-[11px] opacity-40 uppercase tracking-[0.1em] text-center sm:text-left ml-0 sm:ml-4 text-background">
                  By subscribing, you agree to our <a href="#" className="underline decoration-current/30 hover:text-primary transition-colors">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

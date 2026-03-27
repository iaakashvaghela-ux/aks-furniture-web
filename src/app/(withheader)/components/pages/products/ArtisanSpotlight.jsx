import React from 'react';

const ArtisanSpotlight = () => {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-3 py-24 my-16  relative overflow-hidden md:overflow-visible">
      <div className="absolute inset-0 bg-accent-dark left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 border border-primary/20 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 -z-10 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-700"></div>
            <img
              src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg"
              alt="Artisan Craftsmanship"
              className="w-full h-[350px] md:h-[500px] object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <span className="text-xs font-sans font-bold text-primary tracking-[.4em] uppercase">The Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight">
            Built to Last <br /> <span className="italic text-primary">Generations.</span>
          </h2>
          <p className="text-lg text-text-muted leading-relaxed font-sans max-w-xl">
            We believe that true luxury lies in the details that often go unseen. From the careful selection of raw timber to the final hand-polished finish, every Monsta piece is a testament to the enduring soul of craftsmanship.
          </p>
          <div className="pt-4">
            <button className="text-[11px] uppercase tracking-[.3em] font-bold text-secondary border-b border-primary pb-2 hover:text-primary transition-all duration-300">
              Discover Our Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanSpotlight;

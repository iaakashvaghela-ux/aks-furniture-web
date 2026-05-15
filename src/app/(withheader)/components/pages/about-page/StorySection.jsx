import React from 'react';

const StorySection = ({ data = {} }) => {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-sm font-sans font-bold text-primary tracking-[.4em] uppercase">{data.eyebrow || "Who We Are"}</h2>
              <h3 className="text-5xl md:text-6xl font-serif font-bold text-secondary leading-tight italic">
                {data.title || "A Journey of Artisan Spirit."}
              </h3>
            </div>

            <div className="prose prose-lg text-secondary/70 leading-relaxed font-sans first-letter:text-7xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none transition-colors duration-500">
              <p>{data.descriptionOne || "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan."}</p>
              <p className="mt-8">
                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-border">
              <div>
                <p className="text-4xl font-serif font-bold text-secondary">{data.years || "25+"}</p>
                <p className="text-xs font-sans font-bold text-secondary/40 uppercase tracking-widest mt-2">Years Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-secondary">{data.projects || "500+"}</p>
                <p className="text-xs font-sans font-bold text-secondary/40 uppercase tracking-widest mt-2">Bespoke Projects</p>
              </div>
            </div>
          </div>

          {/* Image Layout */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 shadow-2xl">
              <img
                src={data.mainImage || "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg"}
                alt="Artisan at work"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-12 -left-12 w-2/3 aspect-square bg-accent-dark dark:bg-accent-dark/20 -z-0"></div>
            <div className="absolute -top-12 -right-12 w-1/2 overflow-hidden aspect-video shadow-xl z-20 hidden md:block border-8 border-background">
              <img
                src={data.secondaryImage || "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg"}
                alt="Modern Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

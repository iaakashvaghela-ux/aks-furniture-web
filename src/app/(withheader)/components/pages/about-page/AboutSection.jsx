import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          <div className="w-full mb-16 relative group">
            <div className="absolute inset-0 bg-primary/10 -rotate-2 scale-105 rounded-2xl group-hover:rotate-0 transition-transform duration-500"></div>
            <img
              src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg"
              alt="Monsta Showroom"
              className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>

          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary leading-tight italic">
              Welcome to Monsta!
            </h1>
            <p className="text-lg text-text-muted leading-relaxed font-sans max-w-4xl mx-auto italic">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
              vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
              nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum.
            </p>
            <div className="relative pt-8 mt-8 border-t border-primary/20">
              <span className="block text-2xl font-serif text-primary italic leading-relaxed">
                “There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”
              </span>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-4">
                <svg className="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56932 13 5.017 13H4.017V21H6.017Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kathy Young',
      job: 'CEO of SunPark',
      content: 'These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg'
    },
    // Adding a few more to simulate the carousel content
    {
      name: 'Michael Chen',
      job: 'Founder of TechFlow',
      content: 'Exceptional quality and attention to detail. The team was incredibly responsive and helpful throughout the entire process. Highly recommended!',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg'
    },
    {
      name: 'Sarah Jenkins',
      job: 'Director at ArtStudio',
      content: 'A true partner in our success. Their design aesthetic perfectly matched our brand vision. We couldn\'t be happier with the results.',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png'
    }
  ];

  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-secondary tracking-tight">What Our Customers Say?</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-black/5 flex flex-col items-center group">
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 blur-sm group-hover:scale-125 transition-transform duration-500"></div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
                />
              </div>

              <div className="flex mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-lg text-text-muted italic leading-relaxed text-center mb-8 font-sans transition-colors duration-300 group-hover:text-secondary">
                "{item.content}"
              </p>

              <div className="text-center mt-auto">
                <h4 className="text-xl font-bold text-secondary font-serif">{item.name}</h4>
                <p className="text-sm text-primary font-medium tracking-widest uppercase mt-1">{item.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';

const SignatureTestimonial = ({ testimonials = [], imagePath = "" }) => {
  const testimonial = testimonials[0];
  const image = testimonial?.image
    ? `${imagePath}${testimonial.image}`
    : "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg";

  return (
    <section className="py-40 bg-accent overflow-hidden relative">
      {/* Abstract Luxury Gradients */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block p-4 bg-background/50 backdrop-blur-sm rounded-full mb-12 shadow-sm border border-border">
          <img
            src={image}
            alt="Client Profile"
            className="w-16 h-16 rounded-full object-cover grayscale"
          />
        </div>

        <div className="relative max-w-5xl mx-auto italic">
          <svg className="absolute -top-10 -left-10 w-20 h-20 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56932 13 5.017 13H4.017V21H6.017Z" />
          </svg>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary leading-[1.3] relative z-10 transition-colors">
            {testimonial?.message || "Monsta is not just a furniture brand. It is an investment in living well. Their attention to material integrity and artisan soul is unparalleled in modern times."}
          </h2>

          <svg className="absolute -bottom-10 -right-10 w-20 h-20 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56932 13 5.017 13H4.017V21H6.017Z" />
          </svg>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-serif font-bold text-secondary transition-colors">{testimonial?.name || "Kathy Young"}</p>
          <p className="text-[11px] font-bold text-primary uppercase tracking-[.4em] mt-2 transition-colors">Patron • CEO of SunPark</p>
        </div>
      </div>
    </section>
  );
};

export default SignatureTestimonial;

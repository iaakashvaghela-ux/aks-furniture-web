"use client";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { viewTestimonials } from '@/app/(withheader)/api-fetching/testimonials/testimonialsApi';
import { resolveImageUrl } from '../../../utils/imageUrl';

const TestimonialSection = () => {
    const [testimonials, setTestimonials] = useState([])
    const [path, setPath] = useState("")
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        fade: true,
    };
    let data = async () => {

        let testimonialss = await viewTestimonials();
        setTestimonials(testimonialss.data);
        setPath(testimonialss.path);
    }
    useEffect(() => {
        data();
    }, []);
    
    
    return (
        <section className="py-20 md:py-28 bg-accent transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6 tracking-tight uppercase">
                        Client Testimonials
                    </h2>
                    <div className="w-24 h-0.5 bg-primary mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Slider {...settings} className="testimonial-slider">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="outline-none" tabIndex={-1}>
                                <div className="flex flex-col items-center text-center px-4">
                                    <div className="mb-10">
                                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-background shadow-xl mx-auto ring-1 ring-border">
                                            <img
                                                src={resolveImageUrl(path, testimonial.image)}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <blockquote className="mb-10 relative">
                                        <svg className="absolute -top-6 -left-8 w-12 h-12 text-primary/10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v8h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v8h-9.983z" /></svg>
                                        <p className="text-xl md:text-2xl text-secondary/80 font-serif italic leading-relaxed px-6">
                                            "{testimonial.message}"
                                        </p>
                                    </blockquote>

                                    <div className="mb-6">
                                        <h4 className="text-lg font-bold text-secondary uppercase tracking-[0.2em] leading-none mb-2">
                                            {testimonial.name}
                                        </h4>
                                        <span className="text-[11px] text-primary font-bold uppercase tracking-[0.3em]">
                                            {testimonial.designation}
                                        </span>
                                    </div>

                                    <div className="flex justify-center gap-2 mb-10 text-primary">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'text-border opacity-30 shadow-sm'}`}
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

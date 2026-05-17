"use client";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { resolveImageUrl } from '../../../utils/imageUrl';

const HomeSlider = ({ sliderData, path }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        fade: true,
        pauseOnHover: false,
        customPaging: (i) => (
            <div className="w-12 h-1 bg-white/20 mt-10 hover:bg-white/40 transition-all duration-300 rounded-full overflow-hidden">
                <div className="h-full bg-primary origin-left scale-x-0 transition-transform duration-[6000ms] ease-linear [.slick-active_&]:scale-x-100"></div>
            </div>
        ),
    };

    const slides = sliderData
    if (!mounted) return <div className="h-[80vh] md:h-[90vh] bg-secondary animate-pulse" />;

    return (
        <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
            <Slider {...settings} className="h-full">
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-[80vh] md:h-[90vh] outline-none">
                        {/* Background with subtle zoom animation */}
                        <div
                            className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-[10000ms] ease-out scale-110 [.slick-active_&]:scale-100"
                            style={{ backgroundImage: `url(${resolveImageUrl(path, slide.image)})` }}
                        >
                            {/* Sophisticated Dynamic Overlay */}
                            <div className="absolute inset-0 bg-black/40 dark:bg-black/70 backdrop-brightness-[0.8] transition-colors duration-700"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full container mx-auto px-6 flex items-center">
                            <div className="max-w-2xl text-white">
                                <span className="inline-block text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold mb-4 md:mb-6 opacity-0 translate-y-4 transition-all duration-1000 delay-300 [.slick-active_&]:opacity-100 [.slick-active_&]:translate-y-0 text-white/90">
                                    {slide.title}
                                </span>
                                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-6 md:mb-8 opacity-0 translate-y-8 transition-all duration-1000 delay-500 [.slick-active_&]:opacity-100 [.slick-active_&]:translate-y-0">
                                    {slide.title}
                                </h2>
                                <p className="text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed mb-8 md:mb-10 max-w-lg opacity-0 translate-y-8 transition-all duration-1000 delay-700 [.slick-active_&]:opacity-100 [.slick-active_&]:translate-y-0">
                                    {slide.description || slide.subHeading}
                                </p>
                                <div className="opacity-0 translate-y-8 transition-all duration-1000 delay-1000 [.slick-active_&]:opacity-100 [.slick-active_&]:translate-y-0 text-white">
                                    <a
                                        href={slide.link || "/product"}
                                        className="inline-flex items-center gap-3 md:gap-4 bg-white text-neutral-900 px-8 md:px-12 py-4 md:py-5 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-primary hover:text-white transition-all duration-500 rounded-full group shadow-2xl"
                                    >
                                        Explore Collection
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Custom Styles for Slick Paging */}
            <style jsx global>{`
                .slick-dots {
                    bottom: 60px !important;
                    display: flex !important;
                    justify-content: center;
                    gap: 15px;
                }
                .slick-dots li {
                    width: 50px !important;
                    height: 4px !important;
                    margin: 0 !important;
                }
                .slick-dots li button {
                    display: none !important;
                }
            `}</style>
        </section>
    );
};

export default HomeSlider;


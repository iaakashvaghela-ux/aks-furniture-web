"use client";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from '../../common/ProductCard';

const BestsellingProducts = ({productsData, path}) => {

    const [mobileView, setMobileView] = useState(false)

    React.useEffect(() => {
        const updateMobileView = () => {
            setMobileView(window.innerWidth <= 768)
        }

        updateMobileView()
        window.addEventListener('resize', updateMobileView)

        return () => window.removeEventListener('resize', updateMobileView)
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: mobileView ? 1 : 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const products = productsData.filter(item => item.isBestSelling === 'Yes');

    return (
        <section className="py-16 md:py-24 bg-accent transition-colors duration-500">
            <div className="container mx-auto px-4">
                <div className="section_title mb-12 text-center">
                    <h2 className="text-3xl font-serif font-bold text-secondary border-b-2 border-primary inline-block pb-3 px-8">
                        Bestselling Products
                    </h2>
                </div>

                <div className="product_slider_wrapper relative">
                    <Slider {...settings} className="product-slider">
                        {products.map((product) => (
                            <div key={product._id} className="px-3 h-full pb-8">
                                <ProductCard product={product} path={path} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default BestsellingProducts;

"use client";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from '../../common/ProductCard';

const BestsellingProducts = () => {

    const [mobileView, setMobileView] = useState(window.innerWidth <= 768 ? true : false)

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

    const products = [
        {
            id: 15,
            name: "Hardwell Temple Prayer Unit",
            category: "Prayer Units",
            image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg",
            oldPrice: "10,000",
            currentPrice: "9,400",
            link: "https://wscubetech.co/Assignments/furniture/product-details/hardwell-temple-prayer-unit"
        },
        {
            id: 14,
            name: "Dorian Shoe Rack",
            category: "Display Unit",
            image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1608312103476Dorian%20Shoe%20Rack_.jpg",
            oldPrice: "3,500",
            currentPrice: "2,800",
            link: "https://wscubetech.co/Assignments/furniture/product-details/dorian-shoe-rack"
        },
        {
            id: 13,
            name: "Gloria Shoe Racks",
            category: "Shoe Racks",
            image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg",
            oldPrice: "3,400",
            currentPrice: "2,900",
            link: "https://wscubetech.co/Assignments/furniture/product-details/gloria-shoe-racks"
        },
        {
            id: 12,
            name: "Isaac Chest of Drawer",
            category: "Chest Of Drawers",
            image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg",
            oldPrice: "32,000",
            currentPrice: "25,000",
            link: "https://wscubetech.co/Assignments/furniture/product-details/isaac-chest-of-drawer"
        },
        {
            id: 11,
            name: "Louise Cabinet",
            category: "Cabinets and Sideboard",
            image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253167208651620078433247Louise%20Cabinet_.jpg",
            oldPrice: "28,000",
            currentPrice: "23,000",
            link: "https://wscubetech.co/Assignments/furniture/product-details/louise-cabinet"
        },
        {
            id: 10,
            name: "Erica Bookshelfs",
            category: "Bookshelves",
            image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg",
            oldPrice: "38,000",
            currentPrice: "30,000",
            link: "https://wscubetech.co/Assignments/furniture/product-details/erica-bookshelfs"
        }
    ];

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
                            <div key={product.id} className="px-3 h-full pb-8">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style jsx global>{`
                .product-slider .slick-prev, .product-slider .slick-next {
                    z-index: 10;
                    width: 44px;
                    height: 44px;
                    background: var(--background);
                    border: 1px solid var(--border);
                    border-radius: 50%;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .product-slider .slick-prev:before, .product-slider .slick-next:before {
                    color: var(--secondary);
                    font-size: 18px;
                    opacity: 0.8;
                }
                .product-slider .slick-prev:hover, .product-slider .slick-next:hover {
                    background: var(--primary);
                    border-color: var(--primary);
                    transform: scale(1.1);
                }
                .product-slider .slick-prev:hover:before, .product-slider .slick-next:hover:before {
                    color: white;
                    opacity: 1;
                }
                .product-slider .slick-prev { left: -22px; }
                .product-slider .slick-next { right: -22px; }
            `}</style>
        </section>
    );
};

export default BestsellingProducts;

"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from '../../common/ProductCard';

// const productsData = {
//     featured: [
//         { id: 19, name: "Caroline Study Tables", category: "Nest Of Tables", oldPrice: "3,000", currentPrice: "2,500", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg", link: "#" },
//         { id: 16, name: "Evan Coffee Table", category: "Coffee Tables", oldPrice: "2,600", currentPrice: "2,300", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg", link: "#" },
//         { id: 13, name: "Gloria Shoe Racks", category: "Shoe Racks", oldPrice: "3,400", currentPrice: "2,900", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg", link: "#" },
//         { id: 10, name: "Erica Bookshelfs", category: "Bookshelves", oldPrice: "38,000", currentPrice: "30,000", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg", link: "#" },
//         { id: 7, name: "Sapien Sofa Cum Bed", category: "Wooden Sofa Cum Bed", oldPrice: "64,000", currentPrice: "54,000", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615277326496Sapien%20Sofa%20Cum%20Bed__.jpg", link: "#" },
//         { id: 4, name: "Ganthur Wood Sofa Set", category: "2 Seater Sofa", oldPrice: "8,000", currentPrice: "7,600", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615225341228Ganthur%20Sheesham%20Wood%20Sofa%20Set___.jpg", link: "#" },
//         { id: 1, name: "Calina Swing Jhula", category: "Wooden Jhula", oldPrice: "65,000", currentPrice: "58,000", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617816851291Calina%20Swing%20Jhula__.jpg", link: "#" },
//         { id: 21, name: "Modern Lounge Chair", category: "Chairs", oldPrice: "15,000", currentPrice: "12,400", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg", link: "#" }
//     ],
//     arrivals: [
//         { id: 20, name: "Hrithvik Stool", category: "Side Tables", oldPrice: "7,000", currentPrice: "6,000", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg", link: "#" },
//         { id: 17, name: "Godfrey Set", category: "Coffee Sets", oldPrice: "3,000", currentPrice: "2,200", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828302132Godfrey%20Coffee%20Table%20Set__.jpg", link: "#" },
//         { id: 14, name: "Dorian Shoe Rack", category: "Display Unit", oldPrice: "3,500", currentPrice: "2,800", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1608312103476Dorian%20Shoe%20Rack_.jpg", link: "#" },
//         { id: 11, name: "Louise Cabinet", category: "Cabinets", oldPrice: "28,000", currentPrice: "23,000", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253167208651620078433247Louise%20Cabinet_.jpg", link: "#" }
//     ],
//     onsale: [
//         { id: 15, name: "Hardwell Temple", category: "Prayer Units", oldPrice: "10,000", currentPrice: "9,400", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg", link: "#" },
//         { id: 12, name: "Isaac Drawer", category: "Drawers", oldPrice: "32,000", currentPrice: "25,000", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg", link: "#" },
//         { id: 9, name: "Leo TV Cabinets", category: "Tv Units", oldPrice: "26,000", currentPrice: "21,000", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1619988418966Leo%20TV%20Cabinets.jpg", link: "#" },
//         { id: 6, name: "Harper L Shaped", category: "L Shape Sofa", oldPrice: "85,000", currentPrice: "76,000", image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1661762520951Group%201.jpg", link: "#" }
//     ]
// };

export default function ProductArea({ products, path }) {
    const [activeTab, setActiveTab] = useState('featured');

    const tabs = [
        { id: 'featured', label: 'Featured Pieces' },
        { id: 'arrivals', label: 'New Arrivals' },
        { id: 'onsale', label: 'Onsale' }
    ];

    const productsData = {
        featured: products.filter(item => item.productType === 'Featured'),
        arrivals: products.filter(item => item.productType === 'New Arrivals'),
        onsale: products.filter(item => item.productType === 'Onsale')
    };

    return (
        <section className="py-24 bg-background transition-colors duration-500">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-10 md:gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3 md:mb-4 block">Our Collection</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-secondary">
                            Designed for Contemporary Luxury
                        </h2>
                    </div>

                    {/* Minimal Tabs */}
                    <div className="flex items-center gap-6 md:gap-8  border-border pb-1 w-full md:w-auto overflow-x-auto no-scrollbar scroll-smooth">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold transition-all relative pb-2 whitespace-nowrap min-w-fit ${activeTab === tab.id
                                    ? 'text-secondary'
                                    : 'text-secondary/40 hover:text-secondary/70'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-primary animate-fadeIn"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid with Entrance Animation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {productsData[activeTab].map((product, index) => (
                        <div key={product._id} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                            <ProductCard product={product} path={path} />
                        </div>
                    ))}
                </div>

                {/* Explore All Link */}
                <div className="mt-16 text-center">
                    <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-secondary hover:text-primary transition-colors border-b-2 border-primary pb-1">
                        View Entire Collection
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

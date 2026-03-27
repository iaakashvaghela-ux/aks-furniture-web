import React from 'react';
import Link from 'next/link';

export default function ChairCollection() {
    const banners = [
        {
            subtitle: "Design Creative",
            title: "Chair Collection",
            image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp",
            link: "https://wscubetech.co/Assignments/furniture/top-rated"
        },
        {
            subtitle: "Bestselling Products",
            title: "Chair Collection",
            image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp",
            link: "https://wscubetech.co/Assignments/furniture/best-selling"
        },
        {
            subtitle: "Onsale Products",
            title: "Chair Collection",
            image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/08e20925-4e58-4ad3-bbb9-b037d6da2466-1670180400.webp",
            link: "https://wscubetech.co/Assignments/furniture/on-sale"
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {banners.map((banner, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                            <Link href={banner.link} className="block relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={banner.image}
                                    alt={banner.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex flex-col justify-center px-8 pointer-events-none">
                                    <p className="text-gray-600 text-sm font-medium mb-1 tracking-wide uppercase">
                                        {banner.subtitle}
                                    </p>
                                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                                        {banner.title}
                                    </h2>
                                    <div className="mt-4 w-12 h-0.5 bg-red-500 transform origin-left transition-all duration-300 group-hover:w-20"></div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

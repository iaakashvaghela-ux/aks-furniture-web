import React from 'react';

const CuratedGallery = ({ items: galleryItems = [] }) => {
  const fallbackItems = [
    {
      title: 'Monsta Atelier',
      category: 'Production',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg',
      span: 'col-span-1 row-span-2'
    },
    {
      title: 'Sustainable Sourcing',
      category: 'Ethos',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg',
      span: 'col-span-1 row-span-1'
    },
    {
      title: 'Precision Craft',
      category: 'Design',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg',
      span: 'col-span-1 row-span-1'
    }
  ];
  const items = galleryItems.length
    ? galleryItems.map((item) => ({
      title: item.title,
      category: item.category,
      img: item.image,
      span: item.span || "col-span-1 row-span-1"
    }))
    : fallbackItems;

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-sans font-bold text-primary tracking-[.4em] uppercase mb-4">The Gallery</h2>
            <h3 className="text-5xl font-serif font-bold text-secondary">A Life Curated.</h3>
          </div>
          <p className="max-w-xs text-secondary/60 font-sans italic">
            Visual glimpses into our world of meticulous creation and design philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-auto lg:h-[800px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group cursor-pointer lg:${item.span}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden flex items-end p-12">
                <div className="translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                  <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-2">{item.category}</p>
                  <h4 className="text-3xl font-serif font-bold text-white shadow-sm">{item.title}</h4>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedGallery;

import React from 'react';

const AboutGallery = () => {
  const galleries = [
    {
      title: 'What Do We Do?',
      desc: 'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg'
    },
    {
      title: 'Our Mission',
      desc: 'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg'
    },
    {
      title: 'History Of Us',
      desc: 'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleries.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl bg-accent-dark ring-1 ring-black/5 hover:ring-primary/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="p-10 space-y-4">
                <h3 className="text-3xl font-serif font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-base text-text-muted leading-relaxed font-sans group-hover:text-secondary/70 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;

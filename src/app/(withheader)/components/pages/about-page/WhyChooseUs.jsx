import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: '100% Money Back Guarantee',
      desc: 'Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/89df96b6-b70d-463b-affb-58a74d49ed6b-1670161065.jpg'
    },
    {
      title: 'Online Support 24/7',
      desc: 'Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/eb6a7519-f0f9-469f-af25-4ba0536060fd-1670161090.jpg'
    },
    {
      title: 'Creative-Design',
      desc: 'Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim God has created everything like air,water,tree and metal',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/d86a55b7-bbd1-4565-86ad-b3463e728fdc-1760712425.jpg'
    }
  ];

  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-serif font-bold text-secondary mb-20 tracking-tight">Why chose us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="mb-8 overflow-hidden rounded-2xl bg-white p-4 shadow-lg group-hover:shadow-primary/20 group-hover:scale-105 transition-all duration-500 ring-1 ring-black/5">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-24 h-24 object-contain filter group-hover:brightness-110 transition-all duration-500"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-base text-text-muted leading-relaxed font-sans max-w-xs transition-colors duration-300 group-hover:text-secondary/80">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

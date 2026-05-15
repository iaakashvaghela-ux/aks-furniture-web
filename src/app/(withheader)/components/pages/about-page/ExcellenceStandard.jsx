import React from 'react';

const ExcellenceStandard = ({ items = [], imagePath = "" }) => {
  const fallbackStandards = [
    {
      id: '01',
      title: 'Premium Quality',
      desc: '100% Money Back Guarantee on every bespoke piece.',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/89df96b6-b70d-463b-affb-58a74d49ed6b-1670161065.jpg'
    },
    {
      id: '02',
      title: 'Concierge Support',
      desc: 'White-glove 24/7 service for our elite clientele.',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/eb6a7519-f0f9-469f-af25-4ba0536060fd-1670161090.jpg'
    },
    {
      id: '03',
      title: 'Avant-Garde Design',
      desc: 'Pushing boundaries of creative furniture architecture.',
      img: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/d86a55b7-bbd1-4565-86ad-b3463e728fdc-1760712425.jpg'
    }
  ];
  const standards = items.length
    ? items.map((item, index) => ({
      id: String(index + 1).padStart(2, "0"),
      title: item.title,
      desc: item.description,
      img: item.image ? `${imagePath}${item.image}` : ""
    }))
    : fallbackStandards;

  return (
    <section className="py-32 bg-neutral-900 overflow-hidden relative transition-colors duration-500">
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-sans font-bold text-primary tracking-[.4em] uppercase mb-4">The Standard</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-bold italic leading-tight text-white">Defining Future <br /> Classics.</h3>
          </div>
          <p className="max-w-sm text-white/50 text-sm font-sans leading-relaxed">
            We don&apos;t just build furniture; we curate environments that inspire the soul and elevate the everyday experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 ring-1 ring-white/10">
          {standards.map((item) => (
            <div key={item.id} className="p-16 hover:bg-white/5 transition-colors group cursor-default">
              <span className="text-xs font-serif italic text-primary mb-12 block">{item.id}</span>
              <div className="mb-12 w-20 h-20 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4 text-white">{item.title}</h4>
              <p className="text-white/40 font-sans leading-relaxed group-hover:text-white/70 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-serif font-bold text-white/[0.02] pointer-events-none whitespace-nowrap">
        EXCELLENCE EXCELLENCE EXCELLENCE
      </div>
    </section>
  );
};

export default ExcellenceStandard;

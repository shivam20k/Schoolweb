const whyUsData = [
  {
    id: 1,
    title: "Academic Rigor",
    description: "Our curriculum is designed to challenge students and foster a deep love for lifelong learning and intellectual curiosity.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Character Building",
    description: "We emphasize core values of integrity, empathy, and resilience, preparing students to be ethical global citizens.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "World-Class Facilities",
    description: "From modern labs to creative studios and expansive sports grounds, our campus provides the ideal environment for growth.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const WhyUs = () => {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Text Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[540px] lg:mb-0">
              <h2 className="mb-5 text-3xl font-bold leading-tight text-primary sm:text-4xl">
                Why Choose <span className="text-black">St. Jude's International School?</span>
              </h2>
              <p className="mb-10 text-base leading-relaxed text-body-color md:text-lg">
                At St. Jude's, we believe in a transformative educational experience that goes beyond textbooks.
                Our holistic approach ensures that students are not only academically proficient but also
                compassionate leaders of tomorrow.
              </p>

              <div className="space-y-8">
                {whyUsData.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="mr-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 shadow-sm transition-transform hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-black">{item.title}</h3>
                      <p className="text-base text-body-color">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Highlight Card */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative z-10 mx-auto max-w-[500px] lg:mr-0">
              <div className="aspect-square overflow-hidden rounded-2xl bg-orange-600 shadow-2xl">
                {/* Award Label Overlay */}
                <div className="absolute top-6 left-6 z-20 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Award Winning</p>
                  <p className="text-lg font-bold text-black font-serif">Education Excellence 2024</p>
                </div>

                {/* Decorative background for placeholder */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-orange-700 p-12 text-center text-white">
                  <div>
                    <svg className="mx-auto mb-6 h-20 w-20 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2 .712V17a1 1 0 001 1z" />
                    </svg>
                    <h3 className="mb-2 text-2xl font-bold italic font-serif">"Empowering Minds, Shaping Souls"</h3>
                    <p className="text-sm opacity-80 uppercase tracking-widest font-semibold font-sans">Our Founding Motto</p>
                  </div>
                </div>
              </div>

              {/* Decorative Blur Backgrounds */}
              <div className="absolute -bottom-10 -left-10 -z-10 h-64 w-64 bg-orange-400 opacity-20 blur-3xl" />
              <div className="absolute -top-10 -right-10 -z-10 h-64 w-64 bg-orange-100 opacity-30 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

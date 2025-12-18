"use client";
import { useState, useEffect } from "react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "ST. JUDE'S INTERNATIONAL SCHOOL",
      subtitle: "Empowering Minds for a Brighter Future",
      description: "Nurturing curiosity, character, and competence in a global learning community.",
      image: "/images/hero/slide1.jpg",
    },
    {
      id: 2,
      title: "Admissions Open 2025-26",
      subtitle: "Join the Journey of Excellence",
      description: "Apply now to give your child the benefit of world-class education and holistic growth.",
      image: "/images/hero/slide2.jpg",
    },
    {
      id: 3,
      title: "Holistic Development",
      subtitle: "Beyond Academics, Shaping Souls",
      description: "From sports and arts to leadership and community service, we nurture every facet of the student.",
      image: "/images/hero/slide3.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="relative mx-auto max-w-[1200px]">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Slides */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-primary/85 to-orange-400/75 z-10" />

                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 z-10 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 flex h-full items-center justify-center px-4 text-center">
                    <div className="max-w-4xl">
                      <h1 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-fade-in">
                        {slide.title}
                      </h1>
                      <h2 className="mb-6 text-xl font-semibold text-orange-50 sm:text-2xl md:text-3xl lg:text-4xl animate-fade-in animation-delay-200">
                        {slide.subtitle}
                      </h2>
                      <p className="text-base text-white/90 sm:text-lg md:text-xl lg:text-2xl font-medium animate-fade-in animation-delay-400">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
              aria-label="Next slide"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all ${index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-30 -z-10" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-orange-400 rounded-full blur-3xl opacity-20 -z-10" />
        </div>
      </div>

      {/* Background Decorative SVG */}
      <div className="absolute right-0 top-0 z-0 opacity-10">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="277"
            cy="63"
            r="225"
            fill="url(#paint0_linear_orange)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_orange"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6B35" />
              <stop offset="1" stopColor="#FF6B35" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HeroCarousel;

const AboutCollege = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="border-b border-gray-200 pb-16 md:pb-20 lg:pb-28">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              About <span className="text-primary">St. Jude's International School</span>
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
          </div>

          {/* Main Content */}
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-12 rounded-2xl bg-white p-8 md:p-12 shadow-lg border border-orange-100">
                <p className="mb-6 text-base leading-relaxed text-body-color md:text-lg">
                  St. Jude's International School stands as a beacon of excellence in education.
                  Our educational approach is distinctive and unparalleled, dedicated to upholding
                  the highest global standards of academic prowess. We believe in providing a
                  nurturing environment where every student can thrive.
                </p>

                <p className="mb-6 text-base leading-relaxed text-body-color md:text-lg">
                  Education at St. Jude's is about more than just academic results. It's about
                  developing character, fostering creativity, and preparing students to be
                  responsible global citizens. Our faculty, comprised of dedicated educators,
                  works closely with students to help them achieve their goals.
                </p>

                <div className="my-8 rounded-xl bg-orange-50 p-6 shadow-md border-l-4 border-primary">
                  <h3 className="mb-3 text-xl font-bold text-black md:text-2xl">
                    Our Holistic Curriculum
                  </h3>
                  <p className="text-base leading-relaxed text-body-color md:text-lg">
                    Our curriculum integrates traditional academic subjects with a wide range
                    of co-curricular activities, ensuring a well-rounded development for every
                    child. We focus on critical thinking, problem-solving, and emotional intelligence.
                  </p>
                </div>

                <p className="mb-6 text-base leading-relaxed text-body-color md:text-lg">
                  Our state-of-the-art facilities and diverse extracurricular programs aim to
                  cultivate both intellectual and social skills among students. From science labs
                  to sports fields, everything is designed to inspire curiosity and excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="-mx-4 flex flex-wrap">
            {[
              {
                icon: "📚",
                title: "Excellent Academics",
                description: "Consistently high results and a curriculum that promotes critical thinking",
              },
              {
                icon: "🌐",
                title: "Global Perspective",
                description: "Preparing students for a multicultural world through diverse programs",
              },
              {
                icon: "⚡",
                title: "Innovation & Tech",
                description: "Modern campus with high-tech laboratories and digital classrooms",
              },
              {
                icon: "🤝",
                title: "Values Based",
                description: "An atmosphere that fosters integrity, respect, and social responsibility",
              },
            ].map((feature, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="group mb-8 rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg transition-transform duration-300 group-hover:scale-110 text-3xl">
                    {feature.icon}
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-black">{feature.title}</h4>
                  <p className="text-sm text-body-color">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Success Statement */}
          <div className="mt-8 text-center">
            <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 shadow-2xl">
              <p className="text-lg font-semibold text-white md:text-xl">
                At St. Jude's International School, we measure our success by the character
                and achievements of our students. We inspire them to be visionary leaders
                who make a positive impact on the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCollege;

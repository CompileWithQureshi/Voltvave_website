import React from 'react';

function About() {
  return (
    <section id="about" className="flex flex-col items-center text-center py-20">
      <h1 className="text-4xl lg:text-5xl font-bold text-primary">
        Voltvave Innovations Private Limited
      </h1>
      <p className="text-xl lg:text-2xl font-medium mt-4">
        Innovating Today, Empowering Tomorrow.
      </p>
      <div className="mt-10 w-10/12 lg:w-8/12">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Who We Are
        </h2>
        <p className="text-lg text-gray-900 leading-9 font-normal">
          Voltvave Innovations Private Limited is a Jammu & Kashmir-based private company, proud to contribute to the growth and development of the region and beyond. With our headquarters in Pampore, we are dedicated to providing innovative solutions that empower businesses and communities.
        </p>
      </div>
    </section>
  );
}

export default About;

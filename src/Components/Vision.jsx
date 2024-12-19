import React from 'react';

function Vision() {
  return (
    <section id="vision" className="py-20 bg-gray-50">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-10">Our Vision & Mission</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6 ">
        <div className="card bg-base-100 shadow-lg p-6 w-full md:w-5/12">
          <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
          <p className="text-lg leading-relaxed text-start">
            To empower businesses and individuals through innovative information services, fostering growth and transformation in a connected digital world.
          </p>
        </div>
        <div className="card bg-base-100 shadow-lg p-6 w-full md:w-5/12">
          <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
          <ul className="list-disc pl-6 space-y-2 text-start">
            <li>Deliver innovation-driven solutions using cutting-edge technology.</li>
            <li>Adopt a client-centric approach to create tailored, impactful services.</li>
            <li>Promote sustainable growth for stakeholders and the environment.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Vision;

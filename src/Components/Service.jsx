import React from 'react';
import Volt from '/src/assets/voltvave.png';

function Service() {
  const services = [
    { title: "Data Management and Analytics", description: "Transforming raw data into actionable insights." },
    { title: "Technology Consulting and Strategy", description: "Guiding businesses with technology-driven strategies." },
    { title: "Customized Software Development", description: "Building tailored software solutions to meet unique needs." },
    { title: "Process Automation Solutions", description: "Streamlining workflows with innovative automation." },
  ];

  return (
    <section id="services" className="py-20">
      <h1 className="text-4xl font-semibold text-primary text-center mb-10">What We Do</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {services.map((service, index) => (
          <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl p-6 text-start">
            <img src={Volt} alt={service.title} className="mb-4 rounded-lg" />
            <h2 className="text-lg font-bold text-accent mb-2 ">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;

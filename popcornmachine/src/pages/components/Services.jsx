import React from 'react';

const Services = () => {
  const services = [
    { image: 'thumbnail1.jpg', text: "Full-Service Video Production" },
    { image: 'thumbnail2.jpg', text: "Professional Video Editing Services" },
    { image: 'thumbnail3.jpg', text: "Cinematic Visual Storytelling" },
    { image: 'thumbnail4.jpg', text: "Animated Advertising Expertise" },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="service-images">
        {services.map((service, index) => (
          <div key={index} className="service">
            <img src={service.image} alt={service.text} />
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

import React from 'react';

const Services = () => {

  const services = [
    { image: 'video.gif', text: "Production services" },
    { image: 'social-engagement.gif', text: "Digital media" },
    { image: 'video-camera.gif', text: "Professional videography" },
    { image: 'monetization.gif', text: "Cost effective" },
  ];

  return (
    <div className="services-container">
      <h2>What we offer</h2>
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

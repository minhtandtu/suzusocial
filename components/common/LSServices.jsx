import React from "react";

export const LSServices = ({ services }) => {
  return (
    <div>
      {services.map((service, index) => (
        <div key={index} className="py-4">
          <p className="pb-2 text-4xl font-semibold">{service.name}</p>
          {service.detail.map((item, index) => (
            <span key={index} className="mr-4">
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

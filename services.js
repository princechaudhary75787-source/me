import React from "react";

const services = [
  { title: "Oil Change", img: "https://i.ibb.co/3T0w8vF/oil.jpg" },
  { title: "Brake Inspection", img: "https://i.ibb.co/t3R4Gfq/brake.jpg" },
  { title: "Tyre Replacement", img: "https://i.ibb.co/7b6GZfh/tyre.jpg" },
  { title: "Full Bike Service", img: "https://i.ibb.co/yQTSNkh/fullservice.jpg" },
];

function Services() {
  return (
    <div className="services" id="services">
      {services.map((s, i) => (
        <div className="service-card" key={i}>
          <img src={s.img} alt={s.title} />
          <h3>{s.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Services;

import React from "react";
import Card from "../card";
import { services } from "../assets/assets.js";
function Services() {
  return (
    <div className="services">
      {services.map((item, id) => (
        <Card key={id} item={item} />
      ))}
    </div>
  );
}

export default Services;

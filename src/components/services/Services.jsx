import React from 'react';
import "./services.css";

const data = [
  {
    id: 1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    title: "Database",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const Services = () => {
  return <section className="services container section"  id="service">
    <h2 className="section_title">Service</h2>

    <div className="service_container grid">

      {data.map(({id,title,description}) => {
        return(
          <div className="service_card" key={id}>
            <h3 className="service_title">{title}</h3>
            <p className="service_description">{description}</p>
          </div>

        );
      })}
    </div>
  </section>;
  
};

export default Services
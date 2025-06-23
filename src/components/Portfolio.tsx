import Image from "next/image";
import React from "react";

interface Project {
  id: number;
  image: string;
  alt: string;
  category: string;
  title: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    image: "/projects/1.png",
    alt: "Construction project in Madhanandapuram",
    category: "Madhanandapuram",
    title: "Residential Construction - Complete Build"
  },
  {
    id: 2,
    image: "/projects/2.png",
    alt: "Interior designing project in Iyyappanthangal",
    category: "Iyyappanthangal",
    title: "Residential Building - Interior Design"
  },
  {
    id: 3,
    image: "/projects/3.png",
    alt: "Interior and exterior work in Nungambakkam",
    category: "Nungambakkam",
    title: "Property Renovation - Interior & Exterior"
  },
  {
    id: 4,
    image: "/projects/4.png",
    alt: "Commercial interior and exterior in Choolaimedu",
    category: "Choolaimedu",
    title: "Commercial Development - Interior & Exterior"
  },
   {
    id: 5,
    image: "/projects/5.png",
    alt: "Renovation project in Madhavaram",
    category: "Madhavaram",
    title: "Renovation - Interior & Exterior"
  },
   {
    id: 6,
    image: "/projects/6.png",
    alt: "Interior development project in Ayyapanthangal",
    category: "Ayyapanthangal",
    title: "Interior Development - Living Room & Bedroom"
  },
  {
    id: 7,
    image: "/projects/7.png",
    alt: "Interior works project in Ayyapanthangal",
    category: "Ayyapanthangal ",
    title: "Interior works - Bathroom & Kitchen"
  },
];

const Portfolio = () => {
  return (
    <section className="modern-portfolio" id="projects">
      <div className="container">
        <div className="portfolio-header">
          <div className="title-container">
            <h2 className="portfolio-title">Our Projects</h2>
            <div className="title-accent"></div>
          </div>{" "}
          <p className="portfolio-subtitle">
            Every project we deliver is built on these core principles:
          </p>
        </div>{" "}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <Image
                  fill
                  src={project.image}
                  alt={project.alt}
                  style={{ objectFit: "cover" }}
                />{" "}
                <div className="image-overlay">                  <div className="overlay-content">
                    <span className="project-category">{project.category}</span>
                    <h4 className="project-title">
                      {project.title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

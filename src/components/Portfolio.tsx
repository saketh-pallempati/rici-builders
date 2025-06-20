import Image from "next/image";
import React from "react";

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
          <div className="project-card">
            <div className="project-image">
              <Image
                fill
                src="/projects/1.png"
                alt="Construction project in Madhanandapuram"
                style={{ objectFit: "cover" }}
              />{" "}
              <div className="image-overlay">
                <div className="overlay-content">
                  <span className="project-category">Madhanandapuram</span>
                  <h4 className="project-title">
                    Residential Construction
                    <br />
                    Complete Build
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <Image
                fill
                src="/projects/2.png"
                alt="Interior designing project in Iyyappanthangal"
                style={{ objectFit: "cover" }}
              />{" "}
              <div className="image-overlay">
                <div className="overlay-content">
                  <span className="project-category">Iyyappanthangal</span>
                  <h4 className="project-title">
                    Residential Building
                    <br />
                    Interior Design
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <Image
                fill
                src="/projects/3.png"
                alt="Interior and exterior work in Nungambakkam"
                style={{ objectFit: "cover" }}
              />{" "}
              <div className="image-overlay">
                <div className="overlay-content">
                  <span className="project-category">Nungambakkam</span>
                  <h4 className="project-title">
                    Property Renovation
                    <br />
                    Interior & Exterior
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <Image
                fill
                src="/projects/4.png"
                alt="Commercial interior and exterior in Choolaimedu"
                style={{ objectFit: "cover" }}
              />{" "}
              <div className="image-overlay">
                <div className="overlay-content">
                  <span className="project-category">Choolaimedu</span>
                  <h4 className="project-title">
                    Commercial Development
                    <br />
                    Interior & Exterior
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

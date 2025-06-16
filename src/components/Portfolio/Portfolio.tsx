import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio_area area-padding" id="projects">
      <div className="container">
        {" "}
        <div className="area-heading">
          <h3 className="line">Our Projects</h3>
          <p>We build every project on these core principles:</p>
          <div className="filters portfolio-filter">
            <ul>
              <li data-filter=".popular">Experienced Team</li>
              <li data-filter=".latest">Quality Materials</li>
              <li data-filter=".following">On-Time Completion</li>
              <li data-filter=".upcoming">Transparent Pricing</li>
              <li data-filter=".satisfaction">Customer Satisfaction</li>
            </ul>
          </div>
        </div>
        <div className="filters-content">
          <div className="row portfolio-grid">
            <div className="col-lg-6 col-md-6 all following">
              <div className="single_portfolio">
                <Image
                  width={555}
                  height={419}
                  className="img-fluid w-100"
                  src="/projects/1.jpg"
                  alt=""
                />
                <div className="short_info">
                  <p>residential</p>
                  <h4>
                    <a href="portfolio-details.html">
                      Residential Complex, OMR
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 all latest popular upcoming">
              <div className="single_portfolio">
                <Image
                  width={555}
                  height={419}
                  className="img-fluid w-100"
                  src="/projects/2.jpg"
                  alt=""
                />
                <div className="short_info">
                  <p>commercial</p>
                  <h4>
                    <a href="portfolio-details.html">
                      Commercial store, Anna Nagar
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 all latest following">
              <div className="single_portfolio">
                <Image
                  width={555}
                  height={419}
                  className="img-fluid w-100"
                  src="/projects/3.jpg"
                  alt=""
                />
                <div className="short_info">
                  <p>renovation</p>
                  <h4>
                    <a href="portfolio-details.html">
                      House Renovation, T. Nagar
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 all latest upcoming">
              <div className="single_portfolio">
                <Image
                  width={555}
                  height={419}
                  className="img-fluid w-100"
                  src="/projects/4.jpg"
                  alt=""
                />

                <div className="short_info">
                  <p>luxury</p>
                  <h4>
                    <a href="portfolio-details.html">Luxury House, Guindy</a>
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

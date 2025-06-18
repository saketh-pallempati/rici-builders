import Image from "next/image";
import React from "react";
import QuoteButton from "../QuoteButton/QuoteButton";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="service-area" id="services">
      <div className="container">
        <div className="area-heading">
          <h3 className="line">What We Provide</h3>
          <p>
            Crafting exceptional structures with precision engineering and
            innovative design excellence.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          <div className="col-md-6 col-lg-4 col-xl-2-4 d-flex mb-4">
            <div className="single-service shadow-lg w-100">
              <div className="bg-gradient-to-r h-1 w-100 mb-4"></div>
              <div className="service-icon">
                <div className="icon-wrapper">
                  <Image
                    width={40}
                    height={40}
                    src="/images/i1.png.webp"
                    alt="Residential Construction"
                  />
                </div>
              </div>
              <div className="service-content">
                <h5>Residential Construction</h5>
                <p>
                  Building dream homes with modern architecture, quality
                  materials, and innovative design solutions for comfortable
                  family living.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-xl-2-4 d-flex mb-4">
            <div className="single-service shadow-lg w-100">
              <div className="bg-gradient-to-r h-1 w-100 mb-4"></div>
              <div className="service-icon">
                <div className="icon-wrapper">
                  <Image
                    width={40}
                    height={40}
                    src="/images/i2.png.webp"
                    alt="Commercial Buildings"
                  />
                </div>
              </div>
              <div className="service-content">
                <h5>Commercial Buildings</h5>
                <p>
                  Delivering robust commercial buildings, offices, and retail
                  spaces with cutting-edge technology and efficient project
                  management.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-xl-2-4 d-flex mb-4">
            <div className="single-service shadow-lg w-100">
              <div className="bg-gradient-to-r h-1 w-100 mb-4"></div>
              <div className="service-icon">
                <div className="icon-wrapper">
                  <Image
                    width={40}
                    height={40}
                    src="/images/i3.png.webp"
                    alt="Interior Design"
                  />
                </div>
              </div>
              <div className="service-content">
                <h5>Interior Design</h5>
                <p>
                  Transforming spaces with creative interior solutions that
                  blend functionality with aesthetic appeal for modern living.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-xl-2-4 d-flex mb-4">
            <div className="single-service shadow-lg w-100">
              <div className="bg-gradient-to-r h-1 w-100 mb-4"></div>
              <div className="service-icon">
                <div className="icon-wrapper">
                  <Image
                    width={40}
                    height={40}
                    src="/images/i4.png.webp"
                    alt="Renovation Services"
                  />
                </div>
              </div>
              <div className="service-content">
                <h5>Renovation Services</h5>
                <p>
                  Comprehensive renovation solutions to modernize and enhance
                  existing structures with improved functionality and design.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-xl-2-4 d-flex mb-4">
            <div className="single-service shadow-lg w-100">
              <div className="bg-gradient-to-r h-1 w-100 mb-4"></div>
              <div className="service-icon">
                <div className="icon-wrapper">
                  <Image
                    width={40}
                    height={40}
                    src="/images/i5.png"
                    alt="Project Management"
                  />
                </div>
              </div>
              <div className="service-content">
                <h5>Project Management</h5>
                <p>
                  End-to-end project management ensuring timely completion,
                  quality control, and budget optimization for all construction
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

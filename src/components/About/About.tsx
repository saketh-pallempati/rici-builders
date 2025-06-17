import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="number-area" id="about-us">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-5">
            <div className="number-img">
              <Image
                width={368}
                height={462}
                src="/images/about2.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <div className="number-content">
              <h4>
                Providing Personalized And <br />
                High Quality Service
              </h4>
              <p>
                With over 20 years of experience in civil construction, we
                deliver
                <br /> exceptional quality and innovative solutions for every
                project.
                <br /> Our commitment to excellence and customer satisfaction
                sets us apart.
              </p>
              <div className="number-wrapper">
                <div className="single-number">
                  <h5>
                    <span className="counter">100</span>+
                  </h5>
                  <p>happy customer</p>
                </div>
                <div className="single-number">
                  <h5>
                    <span className="counter">25</span>+
                  </h5>
                  <p>Project Done</p>
                </div>
                <div className="single-number">
                  <h5>
                    <span className="counter">9</span>/
                    <span className="counter">10</span>
                  </h5>
                  <p>Average Rating</p>
                </div>
              </div>
              <div className="number-wrapper">
                <div className="single-number">
                  <h5>
                    <span className="counter">20</span>+
                  </h5>
                  <p>years of experience</p>
                </div>
                <div className="single-number">
                  <h5>
                    <span className="counter">60</span>+
                  </h5>
                  <p>Full time Employees</p>
                </div>
                <div className="single-number">
                  <h5>
                    <span className="counter">200+</span>
                  </h5>
                  <p>Quality Checks</p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>

        {/* Services Section */}
        <div className="row services-section">
          <div className="col-12">            <div className="number-content services-content">
              <h4 className="services-title">Our Comprehensive Services</h4>
              <p className="services-subtitle">
                We provide end-to-end construction solutions with professional expertise, 
                modern technology, and unwavering commitment to quality and timely delivery.
              </p>

              {/* Services Grid */}
              <div className="services-grid">
                <div className="service-item">
                  Bank Loan & Building Approval Support
                </div>

                <div className="service-item">
                  Dedicated Full Time Site Engineer
                </div>

                <div className="service-item">
                  APP for Realtime Project Tracking
                </div>

                <div className="service-item">On-Time Handover</div>

                <div className="service-item">
                  One Stop Solution: Design + Construction + Interior
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

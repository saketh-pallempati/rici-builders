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
                    <span className="counter">20</span>+
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

        <div className="row services-section py-5">
          <div className="col-12">
            {" "}
              <div className="principles-grid">
                {" "}
                <div className="principle-card">
                  <div className="principle-icon">👥</div>
                  <span> Bank Loan & Building Approval Support</span>
                </div>
                <div className="principle-card">
                  <div className="principle-icon">⚡</div>
                  <span> Dedicated Full Time Site Engineer</span>
                </div>
                <div className="principle-card">
                  <div className="principle-icon">⏰</div>
                  <span> Guaranteed On-Time Project Delivery</span>
                </div>
                <div className="principle-card">
                  <div className="principle-icon">💎</div>
                  <span> Quality Material Procurement</span>
                </div>
                <div className="principle-card">
                  <div className="principle-icon">⭐</div>
                  <span> Complete Solution: Design + Build + Interior</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

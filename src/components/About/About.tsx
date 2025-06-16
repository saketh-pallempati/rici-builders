import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about-area area-padding" id="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="about-img">
              <Image
                width={555}
                height={485}
                src="/images/about1.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h4>
                WE ARE ON EXPERT <br />
                THIS FIELD BUILDINGS
                <br />
                SOLUTIONS SINCE 2005.
              </h4>
              <p>
                20+ Years of Experience in Residential, Commercial, and
                Renovation Works
                <br />
                Custom Design Solutions Tailored to Your Needs
                <br /> Commitment to Quality and Timely Delivery
              </p>

              <a className="main_btn" href="#">
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

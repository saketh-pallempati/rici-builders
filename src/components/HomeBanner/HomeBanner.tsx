import React from "react";
import { Parallax } from "react-parallax";
import Image from "next/image";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">
      <Parallax
        blur={0}
        bgImage="/images/home-banner.jpg.webp"
        bgImageAlt="home banner"
        strength={100}
        className="container-fluid banner_inner d-flex"
        contentClassName="container-fluid d-flex align-items-center"
      >
        {" "}
        <div className="container">
          {" "}
          <div className="banner_content text-center">
            <div className="fancy-logo-container mb-5">
              <div className="logo-wrapper">
                <div className="logo-glow"></div>
                <Image
                  src="/logo.jpg"
                  alt="Company Logo"
                  width={250}
                  height={160}
                  priority
                  className="fancy-logo"
                />
                <div className="logo-border"></div>
              </div>
            </div>
            <span>Future construction</span>
            <h3>
              Make your dream home
              <br />
              with <strong className="fw-bold">RICI BUILDERS</strong>
            </h3>
            <a className="main_btn" href="#">
              get a quote
            </a>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default HomeBanner;

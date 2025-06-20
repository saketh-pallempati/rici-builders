import React from "react";
import Image from "next/image";
import QuoteButton from "./QuoteButton";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="modern-home-banner">
      <div className="banner-overlay"></div>
      <div className="container">
        <div className="banner-content">
          <div className="brand-section">
            <div className="logo-container">
              <Image
                src="/logo.svg"
                alt="RICI Builders Logo"
                width={220}
                height={100}
                priority
                className="company-logo"
              />
            </div>
            <h1 className="company-name">RICI BUILDERS</h1>
            <p className="company-tagline">Future Construction</p>
          </div>

          <div className="hero-content">
            <h2 className="hero-title">Make Your Dream Home</h2>
            <p className="hero-description">
              Professional construction services with modern solutions for your
              perfect home
            </p>{" "}
            <div className="cta-section">
              <QuoteButton text="Get a Quote" />
              <a href="#projects" className="secondary-btn">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import QuoteButton from "./QuoteButton";

type Props = {};

const HomeBanner = (props: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="modern-home-banner">
      {/* Animated Background Elements */}
      <div className="banner-bg-overlay"></div>
      <div className="floating-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
      
      {/* Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <div className={`banner-content ${isLoaded ? 'loaded' : ''}`}>
          <div className="brand-section">
            <div className="logo-container">
              <div className="logo-glow"></div>
              <Image
                src="/logo.svg"
                alt="RICI Builders Logo"
                width={220}
                height={100}
                priority
                className="company-logo"
              />
            </div>
            <h1 className="company-name">
              <span className="letter-animation">R</span>
              <span className="letter-animation">I</span>
              <span className="letter-animation">C</span>
              <span className="letter-animation">I</span>
              <span className="space"></span>
              <span className="letter-animation">B</span>
              <span className="letter-animation">U</span>
              <span className="letter-animation">I</span>
              <span className="letter-animation">L</span>
              <span className="letter-animation">D</span>
              <span className="letter-animation">E</span>
              <span className="letter-animation">R</span>
              <span className="letter-animation">S</span>
            </h1>
            <div className="tagline-container">
              <div className="tagline-line left"></div>
              <p className="company-tagline">Future Construction</p>
              <div className="tagline-line right"></div>
            </div>
          </div>

          <div className="hero-content">
            <h2 className="hero-title">
              <span className="title-main">Make Your</span>
              <span className="title-highlight">Dream Home</span>
              <div className="title-underline"></div>
            </h2>

            <div className="cta-section">
              <QuoteButton text="Get Free Quote" />
              <a href="#projects" className="secondary-btn">
                <span className="btn-text">View Projects</span>
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomeBanner;

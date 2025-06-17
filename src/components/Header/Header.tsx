import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useVerticalScrollEvent from "@/hooks/useVerticalScrollEvent";

type Props = {};

const Header = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);

    setIsScrolled(currentScrollY > 50);

    if (scrollDifference < 5) return;

    if (currentScrollY < 50) {
      setIsVisible(true);
    } else if (currentScrollY < lastScrollY.current) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsVisible(false);
    }

    lastScrollY.current = currentScrollY;
  };

  useVerticalScrollEvent(handleScroll);

  return (
    <header
      className={`main_menu ${isVisible ? "navbar-visible" : "navbar-hidden"} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand logo_h" href="/">
            <Image src="/logo.jpg" alt="" width={122} height={65}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div
            className="collapse navbar-collapse offset"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav menu_nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#about-us">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

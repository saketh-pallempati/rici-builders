import Image from "next/image";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="service-area area-padding" id="services">
      <div className="container">
        <div className="area-heading">
          <h3 className="line">What We Provide</h3>
          <p>
            Crafting exceptional structures with precision engineering and
            innovative design excellence.
          </p>
        </div>{" "}
        <div
          className="row d-flex justify-content-center"
          style={{ gap: "1.5rem 0" }}
        >
          <div
            className="col-md-6 col-lg-4 col-xl-2-4 d-flex"
            style={{ marginBottom: "1.5rem" }}
          >
            <div
              className="single-service d-flex flex-column h-100"
              style={{
                background: "#fff",
                border: "none",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.15)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".icon-wrapper"
                ) as HTMLElement;
                const heading = e.currentTarget.querySelector(
                  "h5"
                ) as HTMLElement;
                if (iconWrapper) {
                  iconWrapper.style.background =
                    "linear-gradient(135deg, #e22104 0%, #ff4a2b 100%)";
                  iconWrapper.style.transform = "scale(1.1)";
                }
                if (heading) {
                  heading.style.color = "#e22104";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.1)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".icon-wrapper"
                ) as HTMLElement;
                const heading = e.currentTarget.querySelector(
                  "h5"
                ) as HTMLElement;
                if (iconWrapper) {
                  iconWrapper.style.background =
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)";
                  iconWrapper.style.transform = "scale(1)";
                }
                if (heading) {
                  heading.style.color = "#202e31";
                }
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #e22104 0%, #ff4a2b 50%, #e22104 100%)",
                }}
              ></div>
              <div className="service-icon text-center mb-3">
                <div
                  className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/images/i1.png.webp"
                    alt=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="service-content flex-grow-1 d-flex flex-column text-center">
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "#202e31",
                    marginBottom: "1rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  Residential Construction
                </h5>
                <p
                  className="flex-grow-1"
                  style={{
                    color: "#6c757d",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Building dream homes with quality craftsmanship, modern
                  designs, and sustainable materials to create comfortable
                  living spaces for families.
                </p>
              </div>
            </div>
          </div>{" "}
          <div
            className="col-md-6 col-lg-4 col-xl-2-4 d-flex"
            style={{ marginBottom: "1.5rem" }}
          >
            <div
              className="single-service d-flex flex-column h-100"
              style={{
                background: "#fff",
                border: "none",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.15)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".icon-wrapper"
                ) as HTMLElement;
                const heading = e.currentTarget.querySelector(
                  "h5"
                ) as HTMLElement;
                if (iconWrapper) {
                  iconWrapper.style.background =
                    "linear-gradient(135deg, #e22104 0%, #ff4a2b 100%)";
                  iconWrapper.style.transform = "scale(1.1)";
                }
                if (heading) {
                  heading.style.color = "#e22104";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.1)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".icon-wrapper"
                ) as HTMLElement;
                const heading = e.currentTarget.querySelector(
                  "h5"
                ) as HTMLElement;
                if (iconWrapper) {
                  iconWrapper.style.background =
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)";
                  iconWrapper.style.transform = "scale(1)";
                }
                if (heading) {
                  heading.style.color = "#202e31";
                }
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #e22104 0%, #ff4a2b 50%, #e22104 100%)",
                }}
              ></div>
              <div className="service-icon text-center mb-3">
                <div
                  className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/images/i2.png.webp"
                    alt=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="service-content flex-grow-1 d-flex flex-column text-center">
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "#202e31",
                    marginBottom: "1rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  Commercial Construction
                </h5>
                <p
                  className="flex-grow-1"
                  style={{
                    color: "#6c757d",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Delivering robust commercial buildings, offices, and retail
                  spaces with cutting-edge technology and efficient project
                  management solutions.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-2-4 d-flex"
            style={{ marginBottom: "1.5rem" }}
          >
            <div
              className="single-service d-flex flex-column h-100"
              style={{
                background: "#fff",
                border: "none",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.15)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".icon-wrapper"
                ) as HTMLElement;
                const heading = e.currentTarget.querySelector(
                  "h5"
                ) as HTMLElement;
                if (iconWrapper) {
                  iconWrapper.style.background =
                    "linear-gradient(135deg, #e22104 0%, #ff4a2b 100%)";
                  iconWrapper.style.transform = "scale(1.1)";
                }
                if (heading) {
                  heading.style.color = "#e22104";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.1)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".icon-wrapper"
                ) as HTMLElement;
                const heading = e.currentTarget.querySelector(
                  "h5"
                ) as HTMLElement;
                if (iconWrapper) {
                  iconWrapper.style.background =
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)";
                  iconWrapper.style.transform = "scale(1)";
                }
                if (heading) {
                  heading.style.color = "#202e31";
                }
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #e22104 0%, #ff4a2b 50%, #e22104 100%)",
                }}
              ></div>
              <div className="service-icon text-center mb-3">
                <div
                  className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/images/i3.png.webp"
                    alt=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="service-content flex-grow-1 d-flex flex-column text-center">
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "#202e31",
                    marginBottom: "1rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  Building Renovation
                </h5>
                <p
                  className="flex-grow-1"
                  style={{
                    color: "#6c757d",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Transforming existing structures with modern upgrades,
                  energy-efficient solutions, and enhanced functionality while
                  preserving architectural character.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-2-4 d-flex"
            style={{ marginBottom: "1.5rem" }}
          >
            <div
              className="single-service d-flex flex-column h-100"
              style={{
                background: "#fff",
                border: "none",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.15)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".icon-wrapper"
                ) as HTMLElement;
                const heading = e.currentTarget.querySelector(
                  "h5"
                ) as HTMLElement;
                if (iconWrapper) {
                  iconWrapper.style.background =
                    "linear-gradient(135deg, #e22104 0%, #ff4a2b 100%)";
                  iconWrapper.style.transform = "scale(1.1)";
                }
                if (heading) {
                  heading.style.color = "#e22104";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.1)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".icon-wrapper"
                ) as HTMLElement;
                const heading = e.currentTarget.querySelector(
                  "h5"
                ) as HTMLElement;
                if (iconWrapper) {
                  iconWrapper.style.background =
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)";
                  iconWrapper.style.transform = "scale(1)";
                }
                if (heading) {
                  heading.style.color = "#202e31";
                }
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #e22104 0%, #ff4a2b 50%, #e22104 100%)",
                }}
              ></div>
              <div className="service-icon text-center mb-3">
                <div
                  className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/images/i4.png.webp"
                    alt=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="service-content flex-grow-1 d-flex flex-column text-center">
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "#202e31",
                    marginBottom: "1rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  Interior Works
                </h5>
                <p
                  className="flex-grow-1"
                  style={{
                    color: "#6c757d",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Creating stunning interior spaces with custom designs, premium
                  finishes, and functional layouts that reflect your style and
                  needs.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-2-4 d-flex"
            style={{ marginBottom: "1.5rem" }}
          >
            <div
              className="single-service d-flex flex-column h-100"
              style={{
                background: "#fff",
                border: "none",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.15)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".icon-wrapper"
                ) as HTMLElement;
                const heading = e.currentTarget.querySelector(
                  "h5"
                ) as HTMLElement;
                if (iconWrapper) {
                  iconWrapper.style.background =
                    "linear-gradient(135deg, #e22104 0%, #ff4a2b 100%)";
                  iconWrapper.style.transform = "scale(1.1)";
                }
                if (heading) {
                  heading.style.color = "#e22104";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.1)";
                const iconWrapper = e.currentTarget.querySelector(
                  ".icon-wrapper"
                ) as HTMLElement;
                const heading = e.currentTarget.querySelector(
                  "h5"
                ) as HTMLElement;
                if (iconWrapper) {
                  iconWrapper.style.background =
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)";
                  iconWrapper.style.transform = "scale(1)";
                }
                if (heading) {
                  heading.style.color = "#202e31";
                }
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #e22104 0%, #ff4a2b 50%, #e22104 100%)",
                }}
              ></div>
              <div className="service-icon text-center mb-3">
                <div
                  className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/images/i5.png"
                    alt=""
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="service-content flex-grow-1 d-flex flex-column text-center">
                <h5
                  style={{
                    fontWeight: "bold",
                    color: "#202e31",
                    marginBottom: "1rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  Uplifting and Shifting
                </h5>
                <p
                  className="flex-grow-1"
                  style={{
                    color: "#6c757d",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Professional building relocation and structural lifting
                  services with advanced equipment and engineering expertise for
                  safe and efficient property repositioning.
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

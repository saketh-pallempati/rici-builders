import Image from "next/image";
import React from "react";

type Props = {};

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  alt: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Residential Construction",
    description:
      "Building dream homes with modern architecture, quality materials, and innovative design solutions for comfortable family living.",
    icon: "/images/i1.png.webp",
    alt: "Residential Construction",
  },
  {
    id: 2,
    title: "Commercial Buildings",
    description:
      "Delivering robust commercial buildings, offices, and retail spaces with cutting-edge technology and efficient project management.",
    icon: "/images/i2.png.webp",
    alt: "Commercial Buildings",
  },
  {
    id: 3,
    title: "Interior Design",
    description:
      "Transforming spaces with creative interior solutions that blend functionality with aesthetic appeal for modern living.",
    icon: "/images/i3.png.webp",
    alt: "Interior Design",
  },
  {
    id: 4,
    title: "Renovation Services",
    description:
      "Comprehensive renovation solutions to modernize and enhance existing structures with improved functionality and design.",
    icon: "/images/i4.png.webp",
    alt: "Renovation Services",
  },
  {
    id: 5,
    title: "Project Management",
    description:
      "End-to-end project management ensuring timely completion, quality control, and budget optimization for all construction needs.",
    icon: "/images/i5.png",
    alt: "Project Management",
  },
  {
    id: 6,
    title: "Uplifting & Shifting",
    description:
      "Specialized services for uplifting and shifting structures with precision and care. Ensuring safety during the process.",
    icon: "/images/i6.png",
    alt: "Uplifting & Shifting",
  },
];

const Services = (props: Props) => {
  return (
    <section className="service-area py-5" id="services">
      <div className="container">
        <div className="area-heading">
          <h3 className="line">What We Provide</h3>
          <p>
            Crafting exceptional structures with precision engineering and
            innovative design excellence.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="col-md-6 col-lg-4 col-xl-2-4 d-flex mb-4"
            >
              <div className="single-service shadow-lg w-100">
                <div className="bg-gradient-to-r h-1 w-100 mb-4"></div>
                <div className="service-icon">
                  <div className="icon-wrapper">
                    <Image
                      width={40}
                      height={40}
                      src={service.icon}
                      alt={service.alt}
                    />
                  </div>
                </div>
                <div className="service-content">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

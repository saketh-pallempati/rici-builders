import Image from "next/image";
import { useState } from "react";
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="service-area py-5 professional-services" id="services">
      <div className="services-bg-overlay"></div>
      <div className="floating-elements">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`floating-element element-${i + 1}`}></div>
        ))}
      </div>

      <div className="container">
        <div className={`area-heading loaded`}>
          <div className="heading-wrapper">
            <div className="heading-accent"></div>
            <h3 className="line services-main-title">
              <span className="title-word">What</span>
              <span className="title-word">We</span>
              <span className="title-word highlight">Provide</span>
            </h3>
          </div>
        </div>

        <div className="row justify-content-center g-4">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="col-md-6 col-lg-4 col-xl-2-4 d-flex mb-4"
            >
              <div 
                className={`single-service professional-card w-100 ${hoveredCard === service.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card Background Effects */}
                <div className="card-bg-gradient"></div>
                <div className="card-shine"></div>
                
                <div className="service-icon">
                  <div className="icon-wrapper professional-icon">
                    <div className="icon-bg-effect"></div>
                    <div className="icon-border"></div>
                    <Image
                      width={60}
                      height={60}
                      src={service.icon}
                      alt={service.alt}
                      className="service-icon-img"
                    />
                    <div className="icon-glow"></div>
                  </div>
                </div>
                
                <div className="service-content">
                  <h5 className="service-title">{service.title}</h5>
                  <div className="title-separator"></div>
                  <p className="service-description">{service.description}</p>
                  
                  {/* Service Number */}
                  <div className="service-number">
                    <span>{String(service.id).padStart(2, '0')}</span>
                  </div>
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

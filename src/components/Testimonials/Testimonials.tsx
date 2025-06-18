import React from 'react'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image"
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

type Props = {}

const Testimonials = (props: Props) => {

  const carouselConfig = {
    merge: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    center: false,
    dots: true,
    navText: [
      '<i class="fa fa-long-arrow-left"></i> Prev',
      'Next <i class="fa fa-long-arrow-right"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };

  return (
    <section className="testimonial-area area-padding">
        <div className="container">          <div className="area-heading">
            <h3 className="line">Client Testimonials</h3>
            <p>What our satisfied clients from Chennai say about RICI Builders{`'`} exceptional construction services.</p>
          </div>
          <div className="row">          <OwlCarousel
              className="active-testimonial-carusel owl-carousel"
              {...carouselConfig}
            >
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">                  <Image width={91} height={91}
                    className="img-fluid"
                    src="/images/tes1.jpg.webp"
                    alt="Rajesh Krishnamurthy"
                  />
                </div>
                <div className="desc">
                  <h4>Rajesh Krishnamurthy</h4>
                  <p className="designation">Homeowner, T. Nagar, Chennai</p>
                  <p>
                    RICI Builders constructed our dream home in T. Nagar. Their attention to detail, quality materials, and timely completion exceeded our expectations. Highly recommend for residential projects in Chennai!
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="/images/tex2.jpg.webp"                    alt="Priya Venkatesh"
                  />
                </div>
                <div className="desc">
                  <h4>Priya Venkatesh</h4>
                  <p className="designation">Business Owner, Anna Nagar, Chennai</p>
                  <p>
                    We hired RICI Builders for our commercial office space in Anna Nagar. Their professional approach, innovative design solutions, and commitment to deadlines made the entire process smooth and stress-free.
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="/images/tes1.jpg.webp"                    alt="Arun Subramanian"
                  />
                </div>
                <div className="desc">
                  <h4>Arun Subramanian</h4>
                  <p className="designation">Property Developer, Velachery, Chennai</p>
                  <p>
                    Working with RICI Builders on multiple residential projects in Chennai has been outstanding. Their expertise in modern construction techniques and quality materials sets them apart from others.
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="/images/tex2.jpg.webp"                    alt="Sunitha Ramesh"
                  />
                </div>
                <div className="desc">
                  <h4>Sunitha Ramesh</h4>
                  <p className="designation">Villa Owner, Besant Nagar, Chennai</p>
                  <p>
                    The interior design and renovation work by RICI Builders completely transformed our villa in Besant Nagar. Their creative vision and attention to detail made our space both beautiful and functional.
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="/images/tes1.jpg.webp"                    alt="Vijay Kumar"
                  />
                </div>
                <div className="desc">
                  <h4>Vijay Kumar</h4>
                  <p className="designation">Restaurant Owner, Mylapore, Chennai</p>
                  <p>
                    RICI Builders delivered our commercial restaurant project in Mylapore on time and within budget. Their team understood our requirements perfectly and executed with precision and professionalism.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
  )
}

export default Testimonials
import Image from 'next/image'
import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className="service-area area-padding" id="services">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">What We Provide</h3>
            <p>Crafting exceptional structures with precision engineering and innovative design excellence.</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={92} height={92} src="/images/i1.png.webp" alt="" />
                  
                </div>
                <div className="service-content">
                  <h5>Residential Construction</h5>
                  <p>
                    Building dream homes with quality craftsmanship, modern designs, 
                    and sustainable materials to create comfortable living spaces 
                    for families.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={83} height={83} src="/images/i2.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Commercial Construction</h5>
                  <p>
                    Delivering robust commercial buildings, offices, and retail spaces 
                    with cutting-edge technology and efficient project management 
                    solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={53} height={92} src="/images/i3.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Building Renovation</h5>
                  <p>
                    Transforming existing structures with modern upgrades, 
                    energy-efficient solutions, and enhanced functionality 
                    while preserving architectural character.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={82} height={82} src="/images/i4.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Interior Works</h5>
                  <p>
                    Creating stunning interior spaces with custom designs, 
                    premium finishes, and functional layouts that reflect 
                    your style and needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services
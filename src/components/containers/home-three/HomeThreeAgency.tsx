import React from "react";
import Image from "next/image";
import Link from "next/link";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import clutch from "public/images/agency/clutch.png";
import thumbthree from "public/images/agency/thumb-three.png";

const HomeThreeAgency = () => {
  return (
    <section className="section agency agency-two">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              <Image src={thumbthree} alt="Image" className="fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <span className="sub-title">
                About Loued Family
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Empowering Talent and Elevating Music from the Dominican Republic
              </h2>
              <div className="paragraph">
                <p>
                  Loued Family is more than just a record label. We are a creative hub based in the Dominican Republic, dedicated to developing talented artists and providing them with the tools they need to succeed. From song distribution to editorial registrations and full-scale music management, we help artists turn their passion into a sustainable career.
                </p>
                <p>
                  Whether you&apos;re an emerging artist looking for your big break or an established name in need of new direction, Loued Family offers personalized support and global reach to ensure your music connects with the right audience.
                </p>
              </div>
              <div className="cta section__content-cta">
                <div className="single">
                  <h5 className="fw-7">15+</h5>
                  <p className="fw-5">years in the industry</p>
                </div>
                <div className="single">
                  <h5 className="fw-7">30k+</h5>
                  <p className="fw-5">songs distributed worldwide</p>
                </div>
                <div className="single">
                  <h5 className="fw-7">150+</h5>
                  <p className="fw-5">artists under management</p>
                </div>
              </div>
              <div className="section__content-cta cta-group">
                <Link href="/" className="clutch">
                  <Image src={clutch} alt="Image" />
                </Link>
                <Link
                  href="homeS"
                  className="btn btn--primary text-capitalize"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={dotlarge} alt="Image" className="dot-large" />
    </section>
  );
};

export default HomeThreeAgency;

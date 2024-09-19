import React from "react";
import Image from "next/image";
import Link from "next/link";
import two from "public/images/offer/two.png";
import star from "public/images/offer/star.png";

const HomeOffer = () => {
  return (
    <section className="section offer fade-wrapper light">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5">
            <div className="offer__content section__content">
              <span className="sub-title">
                WHAT WE OFFER
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Helping Artists Succeed with Our Music Services
              </h2>
              <div className="paragraph">
                <p>
                  Loued Family offers comprehensive support for artists with
                  services like song distribution, music management, and more.
                  We are dedicated to elevating your music career.
                </p>
              </div>
              <div className="section__content-cta">
                <Link href="/" className="btn btn--secondary">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className="offer__cta">
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="/">
                    Song Distribution
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={two} alt="Song Distribution Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Decorative Star Image" className="star" />
    </section>
  );
};

export default HomeOffer;

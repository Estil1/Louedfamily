import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/portfolio/one.png";
import dot from "public/images/portfolio/dot.png";

const PortfolioText = () => {
  const [hover, setHover] = useState(0);
  return (
    <section className="section portfolio pb-0 fade-wrapper position-relative">
      <div className="portfolio__text-slider-w">
        <div className="portfolio__text-slider-single">
          <h2 className="h1">
            <Link href="/">
              Loued Family Artist 
              <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
            </Link>
          </h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
            >
              <Link href="portfolio">
                <Image src={one} alt="Artist Development Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="/">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="/">Artist Development Distribution</Link>
                </h4>
              </div>
            </div>
          </div>
         <div className="col-12 col-sm-6 col-xl-3">
            <div className="portfolio__single-alt-wrapper fade-top">
              <div className="portfolio__single-alt topy-tilt">
                <h4>
                  <Link href="/">Work</Link>
                </h4>
                <Link href="/" className="arr">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <Image src={dot} alt="Decorative Dot" className="dot-one" />
                <Image src={dot} alt="Decorative Dot" className="dot-two" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default PortfolioText;

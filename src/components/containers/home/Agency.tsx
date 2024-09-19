import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import thumbone from "public/images/agency/thumb-one.png";
import thumbtwo from "public/images/agency/thumb-two.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {
  useEffect(() => {
    const percentElements = document.querySelectorAll("[data-percent]");

    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(".skill-bar-percent") as HTMLElement;
      const percentValue = el.parentNode?.querySelector(".percent-value");

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute("data-percent") || "0%";
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll(".skill-bar-single");
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(".skill-bar-percent");
      const percentValue = element.querySelector(".percent-value");

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        const axBarTimeline = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          { width: 0 },
          { width: target }
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: "0%",
            snap: { textContent: 5 },
          },
          "<"
        );
      }
    });
  }, []);

  return (
    <section className="section agency">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              <Image
                src={thumbone}
                alt="Image"
                className="thumb-one fade-left"
                priority
              />
              <Image
                src={thumbtwo}
                alt="Image"
                className="thumb-two fade-right"
                priority
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <span className="sub-title">
                WELCOME
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                We are Loued Family, a record label from the Dominican Republic
              </h2>
              <div className="paragraph">
                <p>
                  Loued Family is dedicated to developing artists and bringing
                  their music to the world. We offer song distribution,
                  editorial registrations, and comprehensive music management
                  services to help artists achieve their dreams. Join us in
                  celebrating the rich musical heritage of the Dominican
                  Republic.
                </p>
              </div>
              <div className="skill-wrap">
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Artist Development</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="95%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Song Distribution</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="90%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p className="primary-text">Music Management</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="85%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section__content-cta">
                <Link href="" className="btn btn--primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" priority />
      <Image src={dotlarge} alt="Image" className="dot-large" priority />
    </section>
  );
};

export default Agency;

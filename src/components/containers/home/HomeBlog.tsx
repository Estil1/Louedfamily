import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/blog/one.png";
import two from "public/images/blog/two.png";

const HomeBlog = () => {
  return (
    <section className="section blog fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                News & Blog
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Latest Insights and Updates</h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="/">
                  <Image src={one} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="/">
                    Maximizing Your Reach: Social Media Tips for Musicians
                  </Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="/" className="sub-title">
                    Music Industry
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>September 10, 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="/">
                  <Image src={two} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="/">
                    Turning Setbacks into Success: Lessons for Artists
                  </Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="/" className="sub-title">
                    Artist Insights
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>September 8, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;

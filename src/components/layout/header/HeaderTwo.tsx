import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import logoLight from "public/images/logo-light.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";
  const combinedClasses = `${scrolled ? " navbar-active" : " "} ${defaultClasses}`;

  let logoSrc = logo;
  const router = useRouter();
  if (router.pathname === "/index-two-light") {
    logoSrc = logoLight;
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logoSrc} priority alt="Logo" />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item nav-fade">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="/">About Us</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="our-services">Services</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="our-projects">Projects</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="faq">FAQ</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="404">Error</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="our-story">Our Story</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="portfolio">Portfolio</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="our-teams">Our Teams</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="client-feedback">Testimonials</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="contact-us">Contact Us</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link href="contact-us" className="btn btn--secondary">
                        Let&apos;s Talk
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;

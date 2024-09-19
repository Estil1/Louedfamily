import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png"; // Asegúrate de tener un logo adecuado

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer section pb-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }} // Considera una imagen de fondo con temática musical
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={logo} alt="Loued Family Logo" /> 
              </Link>
              <div className="footer__single-meta">
                <Link
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17" // Reemplaza con tu dirección real o elimina si no es necesario
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  Katanga, Los Minas, Santo Domingo, Dominican Republic
                </Link>
                <Link href="tel:+1234567890"> 
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +1 809 456 7890
                </Link>
                <Link href="mailto:info@louedfamily.com"> 
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  contact@louedfamily.com 
                </Link>
              </div>
              <div className="footer__cta text-start">
                <Link href="/" className="btn btn--secondary">
                  Get in touch 
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Join our mailing list</h5> 
              </div>
              <div className="footer__single-content">
                <p>
                  Stay up-to-date with the latest releases, news, and exclusive content from Loued Family.
                </p>
                <div className="footer__single-form">
                  <form action="#" method="post"> {/* Probablemente desees reemplazar esto con un formulario real */}
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p>
                      &copy; {currentYear} Loued Family. All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link href="https://www.facebook.com/LouedfamilyLouedFamily" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="https://twitter.com/LouedFamily" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.instagram.com/LouedFamily" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link href="https://www.youtube.com/c/LouedFamily" target="_blank"> 
                      <i className="fa-brands fa-youtube"></i> 
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

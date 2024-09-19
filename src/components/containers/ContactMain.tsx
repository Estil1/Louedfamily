import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactMain = () => {
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" />
              </div>
              <div className="content">
                <h4>Phone & Fax</h4>
                <p>
                  <Link href="tel:197-90-56-780">Mobile : +1 809 408 4402</Link>
                </p>
                <p>
                  <Link href="tel:197-90-56-780">Fax : +1 809 408 4402</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto:contact@louedfamily.com">
                  Contact@louedfamily.com
                  </Link>
                </p>
                <p>
                  <Link href="mailto:contact@louedfamily.com">
                   Contact@louedfamily.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h4>Our Location</h4>
                <p>
                  <Link
                    href="https://www.google.com/maps/place/Barrio+Katanga,+Santo+Domingo+Este/@18.5143195,-69.8661992,16z/data=!3m1!4b1!4m6!3m5!1s0x8eaf889b50f67909:0x5309b55357af4784!8m2!3d18.5144074!4d-69.8671859!16s%2Fg%2F11b5pjpbpv?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    Katanga Los Minas, Santo Domingo, Dominican Republic
                  </Link>
                </p>
              </div>
            </div>
          </div>
         <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Image" />
              </div>
              <div className="content">
                <h4>Office Hour</h4>
                <p>Sun - Thu 09 am - 06pm</p>
                <p>Fri - Sat 4 pm - 10pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <iframe
                      src="https://www.google.com/maps/place/Barrio+Katanga,+Santo+Domingo+Este/@18.5143195,-69.8661992,16z/data=!3m1!4b1!4m6!3m5!1s0x8eaf889b50f67909:0x5309b55357af4784!8m2!3d18.5144074!4d-69.8671859!16s%2Fg%2F11b5pjpbpv?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form  fade-top">
                    <h3>Leave A Message</h3>
                    <form
                      action="#"
                      method="post"
                      className="section__content-cta"
                    >
                      <div className="group-wrapper">
                        <div className="group-input ">
                          <input
                            type="text"
                            name="contact-name"
                            id="contactName"
                            placeholder="Name"
                          />
                        </div>
                        <div className="group-input ">
                          <input
                            type="email"
                            name="contact-email"
                            id="contactEmail"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="group-input drt">
                        <select className="subject">
                          <option data-display="Subject">Subject</option>
                          <option value="1">Account</option>
                          <option value="2">Service</option>
                          <option value="3">Pricing</option>
                          <option value="4">Support</option>
                        </select>
                      </div>
                      <div className="group-input ">
                        <textarea
                          name="contact-message"
                          id="contactMessage"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;

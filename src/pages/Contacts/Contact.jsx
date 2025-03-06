import React, { useRef, useContext } from "react";
import "./contact.css";
import { assets } from "../../assets/assets";
import AppScrollContext from "../../contexts/AppScrollContext";

const Contact = () => {
  const { scrollToContact, scrollToDivRef } = useContext(AppScrollContext);
  return (
    <section
      className="contact"
      id="contact"
      ref={scrollToDivRef}
      data-aos="fade-up"
      data-aos-duration="3000"
      data-aos-once="true"
    >
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="left__contact">
          <img src={assets.contact} alt="" />
        </div>
        <div className="right__contact">
          <form action="https://formspree.io/f/xzbolqya" method="POST">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              required
            />
            <label htmlFor="fname">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email.."
              required
            />

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Your message.."
              style={{ height: 200 }}
              required
            ></textarea>

            <input type="submit" value="Submit" className=" " />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

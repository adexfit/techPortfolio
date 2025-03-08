import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { HeroText } from "../data/data";
import { MyName } from "../data/data";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import AppScrollContext from "../contexts/AppScrollContext";

const Hero = () => {
  const { scrollToContact, scrollToDivRef, scrollToTop, scrollToTopRef } =
    useContext(AppScrollContext);
  return (
    <>
      <header ref={scrollToTopRef}>
        <div className="container header__container">
          <div className="header__left">
            <h1>{MyName}</h1>
            <p>{HeroText}</p>
            <button onClick={scrollToContact} className="btn btn-primary">
              Contact me
            </button>

            <div className="social-links mt-3 text-center">
              <Link
                to="https://www.linkedin.com/in/elishaadeboye/"
                target="_blank"
              >
                <LiaLinkedinIn />
              </Link>
              <Link
                to="https://github.com/adexfit?tab=repositories"
                target="_blank"
              >
                <FaGithub />
              </Link>
            </div>
          </div>

          <div className="header__right">
            <div className="header__right-image" id="heroimg">
              <img src={assets.illustrate3} alt="right image" />
            </div>
          </div>
        </div>
      </header>{" "}
    </>
  );
};

export default Hero;

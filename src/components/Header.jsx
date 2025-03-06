import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import AppScrollContext from "../contexts/AppScrollContext";

const Header = () => {
  const { scrollToContact, scrollToDivRef } = useContext(AppScrollContext);
  const mobileNav = () => {
    // const openNavMenu = document.querySelector(".open-nav-menu");
    // const closeNavMenu = document.querySelector(".close-nav-menu");
    const navMenu = document.querySelector(".nav-menu");
    const menuOverlay = document.querySelector(".menu-overlay");
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  };

  return (
    <div className="header" ref={scrollToDivRef}>
      <div>
        <div className="header-main container">
          <div className="logo">
            <Link>Adeboye Elisha</Link>
          </div>
          <div className="open-nav-menu" onClick={mobileNav}>
            <span></span>
          </div>
          <div className="menu-overlay" onClick={mobileNav}></div>
          {/* <!-- navigation menu start --> */}
          <nav className="nav-menu">
            <div className="close-nav-menu" onClick={mobileNav}>
              <img src={assets.close} alt="close" />
            </div>
            <ul className="menu">
              <li className="menu-item">
                <Link>Home</Link>
              </li>
              <div
                className="menu-item menu-item-has-children .active"
                onClick={openCloseSubMenu}
              >
                <Link data-toggle="sub-menu">
                  Projects<i className="plus"></i>
                </Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link
                      to={"https://github.com/adexfit/react-note-app/tree/main"}
                    >
                      Trivia App
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to={"https://github.com/adexfit/TickectGenerator"}>
                      {" "}
                      Ticket Generator
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to={"https://github.com/adexfit/react-note-app"}>
                      Note App
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to={"https://github.com/adexfit/colorGame"}>
                      Color Game
                    </Link>
                  </li>
                </ul>
              </div>

              <li className="menu-item" onClick={scrollToContact}>
                <Link>Contact</Link>
              </li>
              <li className="menu-item">
                <Link>Download CV</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

const openCloseSubMenu = (e) => {
  e.preventDefault();
  const mediaSize = 991;
  const navMenu = document.querySelector(".nav-menu");
  if (e.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
    // prevent default anchor click behavior
    e.preventDefault();
    const menuItemHasChildren = event.target.parentElement;
    // if menuItemHasChildren is already expanded, collapse it
    if (menuItemHasChildren.classList.contains("active")) {
      collapseSubMenu();
    } else {
      // collapse existing expanded menuItemHasChildren
      if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
      // expand new menuItemHasChildren
      menuItemHasChildren.classList.add("active");
      const subMenu = menuItemHasChildren.querySelector(".sub-menu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
};

function collapseSubMenu() {
  const navMenu = document.querySelector(".nav-menu");
  navMenu
    .querySelector(".menu-item-has-children.active .sub-menu")
    .removeAttribute("style");
  navMenu
    .querySelector(".menu-item-has-children.active")
    .classList.remove("active");
}

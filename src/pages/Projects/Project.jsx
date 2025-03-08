import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "../Projects/project.css";
import { projectList } from "../../data/data";
import AppScrollContext from "../../contexts/AppScrollContext";

const Project = () => {
  const { scrollToContact, scrollToDivRef, scrollToProject, scrollToProjRef } =
    useContext(AppScrollContext);
  return (
    <section className="portfolio" ref={scrollToProjRef}>
      <h2> Projects</h2>
      <div className="container portfolio__container">
        {projectList.map((proj) => (
          <article
            className="project proj-case-studues"
            id={proj.title}
            data-name="ux"
            key={proj.title}
          >
            <div className="project__image">
              <img src={proj.imgSrc} alt="" />
            </div>
            <div className="project__info">
              <h4>{proj.title}</h4>
              <p>{proj.desc}</p>
              <Link
                to={proj.github}
                className="btn btn-primary"
                target="_blank"
              >
                Read More
              </Link>{" "}
              <br />
              <br />
              {proj.hosted ? (
                <>
                  <Link to={proj.netlify} target="_blank" className="hoverLink">
                    Live link
                  </Link>
                </>
              ) : (
                ""
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;

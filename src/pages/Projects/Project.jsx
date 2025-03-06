import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "../Projects/project.css";

const Project = () => {
  const projectList = [
    {
      title: "Trivia App",
      desc: "A nice react trivia game that awards money for questions answered.",
      imgSrc: `${assets.trivia}`,
      github: "https://github.com/adexfit/react-note-app/tree/main",
      netlify: "https://adex-react-quiz.netlify.app/",
      hosted: true,
    },
    {
      title: "Ticket",
      desc: "A responsive ticket generator designed using react js",
      imgSrc: `${assets.ticketshot}`,
      github: "https://github.com/adexfit/TickectGenerator",
      netlify: "https://adexticketgen.netlify.app/",
      hosted: true,
    },
    {
      title: "React Note App",
      desc: "A react note app with all the CRUD fuctionalities. This app makes an API call to a JSON server which mimics the backend",
      imgSrc: `${assets.noteapp}`,
      github: "https://github.com/adexfit/react-note-app",
      netlify: "",
      hosted: false,
    },
    {
      title: "React Calculator",
      desc: "A react Calculator with all necessary functionalities",
      imgSrc: `${assets.calculator}`,
      github: "https://github.com/adexfit/reactCalculator",
      netlify: "https://adex-react-calculator.netlify.app/",
      hosted: true,
    },
    {
      title: "Color Game",
      desc: "A react color game that allows you to test your vision",
      imgSrc: `${assets.colorcoverpic}`,
      github: "https://github.com/adexfit/colorGame",
      netlify: "https://adexfitcolorgame.netlify.app/",
      hosted: true,
    },
  ];
  return (
    <section className="portfolio">
      <h2> Projects</h2>
      <div className="container portfolio__container">
        {projectList.map((proj) => (
          <article
            className="project proj-case-studues"
            id="egolending"
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

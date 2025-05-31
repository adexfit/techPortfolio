import React from "react";
import { assets } from "../assets/assets";

export const HeroText =
  "I am a skilled software engineer with expertise in JavaScript programming and experience in developing scalable applications. I am Passionate about solving complex problems, and specialize in  frontend development. I thrive on building innovative solutions that enhance user experience and efficiency.";

export const MyName = "Hi, I'm Elisha";

export const mySkills = [
  { name: "React", imgSrc: `${assets.react}`, alt: "React Img" },
  {
    name: "Javascript",
    imgSrc: `${assets.javascript}`,
    alt: "Javascript img",
  },
  { name: "HTML", imgSrc: `${assets.html}`, alt: "HTML img" },
  { name: "CSS", imgSrc: `${assets.css3}`, alt: "CSS img" },
  { name: "Figma", imgSrc: `${assets.figma}`, alt: "Figma Img" },
  { name: "Adobe XD", imgSrc: `${assets.adobexd}`, alt: "Adobe XD Img" },
  {
    name: "Adobe Photoshop",
    imgSrc: `${assets.adobephotoshop}`,
    alt: "Photoshop Img",
  },
  {
    name: "Adobe Illustrator",
    imgSrc: `${assets.adobeillustrator}`,
    alt: "Illustrator Img",
  },
];

export const projectList = [
  {
    title: "Trivia App",
    desc: "A nice react trivia game that awards money for questions answered.",
    imgSrc: `${assets.trivia}`,
    github: "https://github.com/adexfit/Trivia",
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

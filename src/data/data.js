import React from "react";
import { assets } from "../assets/assets";

export const HeroText =
  "I am a skilled software engineer with expertise in JavaScript programming and experience in developing scalable applications. I am Passionate about solving complex problems, and specialize in  frontend development. I thrive on building innovative solutions that enhance user experience and efficiency.";

export const MyName = "Hi, I'm Elisha";

export const mySkills = [
  { name: "React/NextJS", imgSrc: `${assets.react}`, alt: "React Img" },
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
    title: "MiniCommerce",
    desc: "An Ecommerce Furniture App built with Next Js, Zustand, React Query and Tailwindcss",
    imgSrc: `${assets.minicommerce}`,
    github: "https://github.com/adexfit/minicommerce",
    netlify: "https://stupendous-cuchufli-cac44d.netlify.app/",
    hosted: true,
  },
  {
    title: "Twitter Clone",
    desc: "A MEARN stack twitter app designed using Daisy UI, Tailwind css, Tanstack Query",
    imgSrc: `${assets.twiclone}`,
    github: "https://github.com/adexfit/twitterclone",
    netlify: "https://twitterclone-274y.onrender.com/login",
    hosted: true,
  },
  {
    title: "Next JS Task Manager App",
    desc: "A fully working task manager built with Next JS, Typescript, Tailwindcss and Zustand",
    imgSrc: `${assets.taskmanager}`,
    github: "https://github.com/adexfit/nexttaskmanager",
    netlify: "https://adextaskmanager.netlify.app/",
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
    title: "Chrome Origin Trials",
    desc: "I participated in the chrome origin trials program where I implemented the translation API and the Summarizer API",
    imgSrc: `${assets.adexai}`,
    github: "https://github.com/adexfit/adexai",
    netlify: "https://adexai.netlify.app/",
    hosted: true,
  },
];

// {
//   title: "Color Game",
//   desc: "A react color game that allows you to test your vision",
//   imgSrc: `${assets.colorcoverpic}`,
//   github: "https://github.com/adexfit/colorGame",
//   netlify: "https://adexfitcolorgame.netlify.app/",
//   hosted: true,
// },

// {
//   title: "React Calculator",
//   desc: "A react Calculator with all necessary functionalities",
//   imgSrc: `${assets.calculator}`,
//   github: "https://github.com/adexfit/reactCalculator",
//   netlify: "https://adex-react-calculator.netlify.app/",
//   hosted: true,
// },

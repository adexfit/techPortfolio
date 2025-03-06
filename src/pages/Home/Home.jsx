import React from "react";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Project from "../Projects/Project";
import Contact from "../Contacts/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default Home;

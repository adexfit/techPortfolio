import React, { createContext, useRef } from "react";

export const AppScrollContext = createContext();
export const AppScrollProvider = ({ children }) => {
  const scrollToDivRef = useRef(null);
  const scrollToProjRef = useRef(null);
  const scrollToTopRef = useRef(null);
  const scrollToContact = () => {
    if (scrollToDivRef.current) {
      scrollToDivRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const scrollToProject = () => {
    if (scrollToProjRef.current) {
      scrollToProjRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const scrollToTop = () => {
    if (scrollToTopRef.current) {
      scrollToTopRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <AppScrollContext.Provider
      value={{
        scrollToContact,
        scrollToDivRef,
        scrollToProject,
        scrollToProjRef,
        scrollToTop,
        scrollToTopRef,
      }}
    >
      {children}
    </AppScrollContext.Provider>
  );
};

export default AppScrollContext;

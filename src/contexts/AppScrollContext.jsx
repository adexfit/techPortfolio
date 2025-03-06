import React, { createContext, useRef } from "react";

export const AppScrollContext = createContext();
export const AppScrollProvider = ({ children }) => {
  const scrollToDivRef = useRef(null);
  const scrollToContact = () => {
    if (scrollToDivRef.current) {
      scrollToDivRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <AppScrollContext.Provider value={{ scrollToContact, scrollToDivRef }}>
      {children}
    </AppScrollContext.Provider>
  );
};

export default AppScrollContext;

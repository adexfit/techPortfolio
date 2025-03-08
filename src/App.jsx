import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import { useEffect, useRef } from "react";
import { AppScrollProvider } from "./contexts/AppScrollContext";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    //   window.addEventListener("scroll", () => {
    //     document
    //       .querySelector(".header")
    //       .classList.toggle("window-scroll", window.scrollY > 0);
    //   });
  }, [window.scrollY]);

  return (
    <AppScrollProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </AppScrollProvider>
  );
}

export default App;

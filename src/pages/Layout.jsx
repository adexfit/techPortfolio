import React from "react";
import Header from "./../components/Header";
// import Navbar from "./header2/Navbar";
import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

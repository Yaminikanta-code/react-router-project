import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

/**
 * The main app layout component.
 *
 * It renders a Header, Footer and
 * an Outlet for the nested routes.
 *
 * @returns {React.ReactElement} The Layout component.
 */
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Loan from "./pages/Loan";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Navbar/>
    <Loan/>
    <About/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  );
};

export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      {/*<Projects />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;

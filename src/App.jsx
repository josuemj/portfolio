import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { GiHamburgerMenu } from "react-icons/gi";
import About from "./components/about/About";
import Sports from "./components/Sports/Sports";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNavBar, setHideNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHideNavBar(true);
      } else {
        // Scrolling up
        setHideNavBar(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </header>
      <NavBar show={showNav && !hideNavBar} />
      <div className={`mainDiv ${showNav && !hideNavBar ? "active" : ""}`}>
        <About />
        <Skills />
        <Projects />
        <Sports />
      </div>
    </>
  );
}

export default App;

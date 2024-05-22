import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { GiHamburgerMenu } from "react-icons/gi";
import About from "./components/about/About";

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
        <div className="content">Skills</div>
        <div className="content">Projects</div>
        <div className="content">Sports</div>
      </div>
    </>
  );
}

export default App;

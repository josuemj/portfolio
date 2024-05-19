import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
      </header>
      <NavBar show={showNav}/>
      <div className={`mainDiv ${showNav ? "active" : ""}`}> 
        
        <div className="content">
          about
        </div >
        <div className="content">
          skills
        </div>
        <div className="content">
          Proyects
        </div>
        <div className="content">Sports</div>
      </div>
    </>
  );
}

export default App;

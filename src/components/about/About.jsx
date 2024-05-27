import "./About.css";
import ImageHolder from "../ImageHolder/ImageHolder";
import React, { useEffect, useState } from "react";
import SkillSample from "../SkillSample/SkillSample";
import profile from "./profile.jpg";
import analytics from "./icon-an.png";

function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const objStyle = {
    color: "rgb(0, 102, 150)",
    fontSize: "140px",
    width: "100%",
    height: "40%",
    paddingTop: "15px",
  };

  return (
    <>
      <section className="about-section">
        <div className="first-stage">
          <div className="text-container">
            <span className="hello">Hello There!</span>
            <span className="name">&lt;I'm Josue Marroquin/&gt;</span>
          </div>
          <div className="introduction">
            <div className={`image-holder ${isScrolled ? "scrolled" : ""}`}>
              <ImageHolder image={profile} />
            </div>
            <div className="description">
              <span className="welcome">Welcome!</span>
              <p className="description-welcome">
                Hi! I'm a Junior FullStack Developer based in Guatemala,
                passionate about Front End Development, AI, Mathematics, and
                Mobile Development. Currently in my third year of Computer
                Science and Information Technology studies, I'm always eager to
                embrace new challenges and expand my skillset. Let's connect and
                dive into my background!
              </p>
            </div>
          </div>
          <div className="objective">
            <span className="welcome" style={objStyle}>
              &lt;Objective/&gt;
            </span>
            <p className="description-objective">
              With a strong foundation in computer science and information
              technology, my experience in the tech industry has equipped me
              with valuable skills, including effective communication, fast
              learning, adaptability, a collaborative approach, analytical
              thinking, problem-solving abilities, and time management.
            </p>
            <div className="objective-demo">
              <SkillSample img={analytics} text={"Thinking"} size="100px" />
              <SkillSample img={analytics} text={"Thinking"} size="100px" />
              <SkillSample img={analytics} text={"Thinking"} size="100px" />
              <SkillSample img={analytics} text={"Thinking"} size="100px" />
              <SkillSample img={analytics} text={"Thinking"} size="100px" />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

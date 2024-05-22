import "./About.css";
import ImageHolder from "../ImageHolder/ImageHolder";
import React, { useEffect, useState } from "react";

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
              <ImageHolder
                image={
                  "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                }
              />
            </div>
            <div className="description">
              <span className="welcome">Welcome!</span>
              <p className='description-welcome'>
                "Hi! I'm a Junior FullStack Developer based in
                Guatemala, passionate about Front End Development, AI,
                Mathematics, and Mobile Development. Currently in my third year
                of Computer Science and Information Technology studies, I'm
                always eager to embrace new challenges and expand my skillset.
                Let's connect and dive into my background!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

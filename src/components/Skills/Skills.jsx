import "./Skills.css";
import htmllogo from './html5logo.png'
import TechStack from "../TechStack/TechStack";

function Skills() {

  const techs = [
    {techname: "HTML5", techSrc: htmllogo},
    {techname: "HTML5", techSrc: htmllogo}
  ]
  return (
    <>
      <section className="skills-section">
      <span className="skill-welcome">&lt;My Tech Skills/&gt;</span>
      <TechStack techStackName={"FrontEnd"} techs={techs}/>
      <TechStack techStackName={"Backend"} techs={techs}/>
      <TechStack techStackName={"Data management"} techs={techs}/>
      <TechStack techStackName={"Testing"} techs={techs}/>
      </section>
    </>
  );
}

export default Skills;

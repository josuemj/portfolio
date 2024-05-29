import "./TechStack.css";
import Tech from "./Tech/Tech";

function TechStack({ techStackName, techs }) {
  return (
    <>

      <span className="tech-stack-name">{techStackName}</span>

      <div className="tech-stack">
        {techs.map((tech, index) => (
          <Tech key={index} techname={tech.techname} techSrc={tech.techSrc} />
        ))}
      </div>
    </>
  );
}

export default TechStack;

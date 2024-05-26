import "./NavBar.css";
import IconM from "./Icon/IconM";

function NavBar({ show }) {
  return (
    <div className={show ? "navBar active" : "navBar"}>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#sports">Sports</a>
        </li>
      </ul>
      <div className="iconsContainer">
        <IconM
          source={
            "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
          }
          x="48px"
          y={"48px"}
          goesTo={"https://www.linkedin.com/in/josu%C3%A9-marroquin-9593991b7/"}
        />
        <IconM
          source={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkTHDk9wFCnizM9J7jS8FQkSQkY3BPG_HvnkdetOYXw&s"
          }
          x="48px"
          y="48"
          goesTo={"https://github.com/josuemj"}
        />
      </div>
    </div>
  );
}

export default NavBar;

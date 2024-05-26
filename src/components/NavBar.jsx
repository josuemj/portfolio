import './NavBar.css';

function NavBar({ show }) {
  return (
    <div className={show ? 'navBar active' : 'navBar'}>
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
    </div>
  );
}

export default NavBar;

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header >
      <nav>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about-me">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}


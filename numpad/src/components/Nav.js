import { Link } from "react-router-dom";

const Nav = () => {
  
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/game">Game</Link>
          <Link to="/score">Score</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
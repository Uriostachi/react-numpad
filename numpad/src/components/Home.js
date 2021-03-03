import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>MENTAL ARITHMETIC</h1>
      <p>This is a game for Arithmetic lovers</p>
      <Link to='/game'>Start</Link>
    </div>
  )
}

export default Home;
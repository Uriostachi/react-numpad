import { useSelector, useDispatch } from 'react-redux';

import Display from '../Styles/Display';
import Button from '../Styles/Button';
import { Link } from 'react-router-dom';

import { resetGame } from '../actions/actions-types';

const Score = () => {

  const { points } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame());
  }

  return (
    <>
      <Display primary >Congratulation you have {points} points </Display>
      <Link onClick={() => handleReset() } to="/game"><Button primary>Play again</Button></Link>
    </>
  )
}

export default Score;
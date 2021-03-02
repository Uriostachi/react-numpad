import { useSelector } from 'react-redux';
import { Column } from '../Styles/Grid';

const Counter = () => {
  const { points, remainingQuestions } = useSelector(state => state);

  return (
    <>
      <Column>
        <p>you have : {points} points</p>
        <p>{remainingQuestions} questions remaining</p>
      </Column>
    </>
  )

}

export default Counter;
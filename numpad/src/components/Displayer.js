import { useSelector, useDispatch } from 'react-redux';
import Display from '../Styles/Display';

const Displayer = () => {

  const { explanation, answerStatus, answerMessage, question } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
      {explanation && (<Display>{explanation}</Display>)}
      {answerMessage && (<Display answerStatus>{answerMessage}</Display>)}
      {question && (<Display>{question}</Display>)}
    </>
  )
}

export default Displayer;
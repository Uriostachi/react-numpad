import { useSelector } from 'react-redux';
import Display from '../Styles/Display';

const Displayer = () => {

  const { explanation, answerStatus, answerMessage, questionData } = useSelector(state => state);

  return (
    <>
      {explanation && (<Display>{explanation}</Display>)}
      {answerMessage && (<Display primary={answerStatus} secondary={!answerStatus} >{answerMessage}</Display>)}
      {questionData.question && (<Display>{questionData.question}</Display>)}
    </>
  )
}

export default Displayer;
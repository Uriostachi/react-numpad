import {UPDATE_ANSWER, RESET_ANSWER, SUBMIT} from '../constants/action';

const questionGenerator = () => {
  const num1 = Math.floor(Math.random() * 10);  
  const num2 = Math.floor(Math.random() * 10); 
  
  return {
    question: num1 + ' x ' + num2,
    correctAnswer: num1 * num2
  }
}

const stateInit = {
  explanation: 'Find solutions',
  answerStatus: true,
  answerMessage: '',
  answer: '',
  questionData: questionGenerator(),
  points: 0,
  remainingQuestions: 5
}

const reducer = (state = stateInit, action = {}) => {

  const { questionData, answer, points, remainingQuestions } = state;

  switch (action.type) {

    case UPDATE_ANSWER:
      return {
        ...state,
        answer: answer + action.payload
      }

    case RESET_ANSWER:
      return {
        ...state,
        answer: ''
      }

    case SUBMIT:
      if (parseInt(answer) === questionData.correctAnswer) 
        return {
          ...state,
          explanation: '',
          answerStatus: true,
          answerMessage: `You are right ${questionData.question} = ${questionData.correctAnswer}`,
          points: points + 1,
          answer: '',
          questionData: questionGenerator(),
          remainingQuestions: remainingQuestions - 1
        }
      else 
        return {
          ...state,
          explanation: '',
          answerStatus: false,
          answerMessage: `You are wrong ${questionData.question} = ${questionData.correctAnswer}`,
          answer: '',
          questionData: questionGenerator(),
          remainingQuestions: remainingQuestions - 1
        }

    case 'NEXT':    

    default:
      return state;
  }
}

export default reducer;
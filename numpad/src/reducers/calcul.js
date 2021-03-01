import {UPDATE_ANSWER, RESET_ANSWER, SUBMIT} from '../constants/action';

const num1 = Math.floor(Math.random() * 100);  
const num2 = Math.floor(Math.random() * 100); 

const stateInit = {
  explanation: 'Find solutions',
  answerStatus: 'primary',
  answerMessage: '',
  correctAnswer: num1 * num2,
  question: num1 + ' x ' + num2,
  answer: '',
  points: 0
}

const reducer = (state = stateInit, action = {}) => {

  const { explanation, answerStatus, answerMessage, correcAnswer, question, answer, points } = state;

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
      if (parseInt(answer) === correcAnswer) 
        return {
          ...state,
          explanation: '',
          answerMessage: `You are right ${question} = ${correcAnswer}`,
          points: points + 1,
          question:'',
          correcAnswer: 0
        }
      else 
        return {
          ...state,
          explanation: '',
          answerStatus: 'secondary',
          answerMessage: `You are wrong ${question} = ${correcAnswer}`,
          question: '',
          correcAnswer: 0
        }

    case 'NEXT':    

    default:
      return state;
  }
}

export default reducer;
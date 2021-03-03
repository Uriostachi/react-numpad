import { UPDATE_ANSWER, RESET_ANSWER, SUBMIT, RESET_GAME } from '../constants/action';

export const updateAnser = payload => {
  return {
    type: UPDATE_ANSWER, payload
  }
};

export const resetAnser = () => {
  return {
    type: RESET_ANSWER
  }
};

export const submit = () => {
  return {
    type: SUBMIT
  }
};

export const resetGame = () => {
  return {
    type: RESET_GAME
  }
}

import {UPDATE_ANSWER, RESET_ANSWER, SUBMIT} from '../constants/action';

export const updateAnser = payload => {
  return {
    type: UPDATE_ANSWER, payload
  }
};

export const resetAnser = payload => {
  return {
    type: RESET_ANSWER
  }
};

export const submit = payload => {
  return {
    type: SUBMIT
  }
};

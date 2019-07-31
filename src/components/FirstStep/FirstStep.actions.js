export const SET_FIRST_STEP = 'SET_FIRST_STEP';

export function setData(payload) {
  return {
    type: SET_FIRST_STEP,
    payload,
  };
}

export const SET_FIRST_STEP = 'SET_FIRST_STEP';

export function setFirstStep({ card, country }) {
  return {
    type: SET_FIRST_STEP,
    card,
    country,
  };
}

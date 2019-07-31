export const RESET = 'RESET';

export function reset(name) {
  return {
    type: RESET,
    name,
  };
}

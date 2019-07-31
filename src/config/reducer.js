import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { SET_FIRST_STEP } from '../components/FirstStep/FirstStep.actions';

const initialState = {
  step1: {},
};

const step1 = handleActions(
  {
    [SET_FIRST_STEP](state, { payload }) {
      return {};
    },
  },
  initialState.step1
);

const rootReducer = combineReducers({
  step1,
});

export default rootReducer;

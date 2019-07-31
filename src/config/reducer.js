import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { SET_FIRST_STEP } from '../components/FirstStep/FirstStep.actions';
import { RESET } from '../commonActions/commonActions';

const initialState = {
  data: {
    card: '',
    country: 'Ukraine',
    code: '',
  },
};

const data = handleActions(
  {
    [SET_FIRST_STEP](state, { payload }) {
      return {
        ...state,
        [payload.name]: payload.value,
      };
    },
    [RESET](state, { name }) {
      return {
        ...state,
        [name]: initialState.data[name],
      };
    },
  },
  initialState.data
);

const rootReducer = combineReducers({
  data,
});

export default rootReducer;

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export default createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(promise, thunk)));

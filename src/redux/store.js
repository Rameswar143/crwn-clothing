import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middleWare = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;

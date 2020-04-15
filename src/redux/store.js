import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// Set up the Middlewares array. In this case we only include the logger middleware, but we can include more...It shows the previous state, action and next state of the store
const middlewares = [logger];

// Set up the redux store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

//In case we apply only the logger middleware, but the other way is more escalable.
// const store = createStore(reactRedcuer, applyMiddleware(logger));

export default store;

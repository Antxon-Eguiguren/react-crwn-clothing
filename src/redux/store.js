import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// Set up the Middlewares array. In this case we only include the logger middleware in the development version of the app (not in production), but we can include more...It shows the previous state, action and next state of the store
const middlewares = [];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// Set up the redux store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Set up the redux persistor
export const persistor = persistStore(store);

export default { store, persistor };

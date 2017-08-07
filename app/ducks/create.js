import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import { createStore as _createStore, applyMiddleware } from 'redux';
import createMiddleware from './middleware/client_middleware';

export default function createStore(client, data) {
  let middleware = null;
  if (__DEV__) {
    middleware = [createMiddleware(client, devTools), thunk, logger];
  } else {
    middleware = [createMiddleware(client), thunk];
  }

  const finalCreateStore = applyMiddleware(...middleware)(_createStore);


  const reducer = require('./index').default;

  const store = finalCreateStore(reducer, data);


  return store;
}

const logger = store => next => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

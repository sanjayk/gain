import thunk from 'redux-thunk';
import { createStore as _createStore, applyMiddleware } from 'redux';
import createMiddleware from './middleware/client_middleware';

export default function createStore(client, data) {
  const middleware = [createMiddleware(client), thunk];

  const finalCreateStore = applyMiddleware(...middleware)(_createStore);


  const reducer = require('./index').default;

  const store = finalCreateStore(reducer, data);


  return store;
}

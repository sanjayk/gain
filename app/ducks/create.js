import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from './middleware/client_middleware';
import thunk from 'redux-thunk';
import Immutable from 'immutable';

export default function createStore(client, data) {

  const middleware = [createMiddleware(client), thunk];

  let finalCreateStore = applyMiddleware(...middleware)(_createStore);


  const reducer = require('./index').default;

  const store = finalCreateStore(reducer, data);


  return store;
}

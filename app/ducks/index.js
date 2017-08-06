import { combineReducers } from 'redux';

import mycards from './mycards';
import googleplaces from './googleplaces';
import location from './location';

export default combineReducers({
  mycards,
  googleplaces,
  location,
});

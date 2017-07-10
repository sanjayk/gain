import { combineReducers } from 'redux';

import mycards from './mycards';
import nav from './nav';

export default combineReducers({
  mycards,
  nav,
});

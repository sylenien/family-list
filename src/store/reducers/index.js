import { combineReducers } from 'redux';

import list from './list';
import month from './month';

export default combineReducers({
  list,
  month
})
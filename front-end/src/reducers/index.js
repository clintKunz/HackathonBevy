import { combineReducers } from 'redux';

import solicit from './solicit';
import session from './session';
import user from './user';

export default combineReducers({
  solicit,
  session,
  user,
})
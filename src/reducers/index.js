import { combineReducers } from 'redux';
import authenticationReducer from './auth';
import usernameReducer from './username';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  username: usernameReducer,
});

export default rootReducer;

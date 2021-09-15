import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_SUCCESS } from '../actions';

const authenticationReducer = (
  authState = {
    user: [],
    error: '',
  },
  action,
) => {
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      return {
        ...authState,
        user: [action.payload],
        error: '',
      };
    case FETCH_LOGIN_FAILURE:
      return {
        ...authState,
        user: [],
        error: action.payload,
      };
    default:
      return authState;
  }
};

export default authenticationReducer;

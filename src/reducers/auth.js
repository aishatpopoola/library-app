import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_SUCCESS } from '../actions/types';

const authenticationReducer = (
  state = {},
  action,
) => {
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        user: [action.payload],
        error: '',
      };
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        user: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authenticationReducer;

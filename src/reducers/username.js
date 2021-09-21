import { CHANGE_STATE } from '../actions/types';

const usernameReducer = (state = 'invalid', action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_STATE:
      return payload;
    default:
      return state;
  }
};

export default usernameReducer;

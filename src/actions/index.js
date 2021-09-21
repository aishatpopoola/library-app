import Axios from 'axios';
import * as types from './types';
import token from '../utils/jwt';
import alert from '../utils/alert';

const authSuccess = user => ({
  type: types.FETCH_LOGIN_SUCCESS,
  payload: user,
});
const authFailed = error => ({
  type: types.FETCH_LOGIN_FAILURE,
  payload: error,
});
const updateUserState = payload => ({ type: types.CHANGE_STATE, payload });

export const authUser = (values, type) => dispatch => {
  Axios.post(type, values)
    .then(res => {
      const { data, status } = res;
      dispatch(authSuccess(data));
      if (status === 200 || status === 201) {
        token.clearToken();
        token.setToken(data.token);
        dispatch(updateUserState(data.username));
        alert(data.message, 'alert_danger');
      }
      if (status !== 200) {
        if (status === 204) {
          alert('Invalid Credentials', 'alert_success');
        } else if (data.error) {
          alert(data.error, 'alert_danger');
        }
      }
    })
    .catch(error => {
      const { message } = error;
      dispatch(authFailed(message));
    });
};

export const logoutUser = () => dispatch => {
  const authToken = token.getToken();
  const config = { headers: { Authorization: `Bearer ${authToken}` } };
  Axios.get('sign-out', config)
    .then(res => {
      const { data } = res;
      dispatch(authSuccess(data));
      token.clearToken();
      dispatch(updateUserState(''));
      if (data.message) {
        alert(data.message, 'alert-success');
      }
    })
    .catch(error => {
      const { message } = error;
      dispatch(authFailed(message));
    });
};

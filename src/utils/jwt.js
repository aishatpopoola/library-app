const token = {
  getToken() {
    const getItem = localStorage.getItem('token');
    return getItem ? JSON.parse(getItem) : null;
  },
  setToken(token) {
    return localStorage.setItem('token', JSON.stringify(token));
  },
  clearToken() {
    return localStorage.clear();
  },
};
export default token;

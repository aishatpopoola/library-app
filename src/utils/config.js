import token from './jwt';

const authToken = token.getToken();
const config = { headers: { Authorization: `Bearer ${authToken}` } };

export default config;

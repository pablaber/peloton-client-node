const querystring = require('querystring');

import request from './request';

interface ClientVariables {
  loggedIn: Boolean,
  cookie?: Array<String>
  userId?: String
}

interface AuthenticateOptions {
  username: string
  password: string
}

/**
 * The client variables which are stored to maintain a "session" when making requests.
 */
const clientVariables: ClientVariables = {
  loggedIn: false,
};

async function authenticate(options: AuthenticateOptions) {
  const loginRes = await request.post('https://api.onepeloton.com/auth/login', {
    username_or_email: options.username,
    password: options.password,
  });
  clientVariables.cookie = loginRes.headers['set-cookie'];
  clientVariables.userId = loginRes.data.user_id;
  clientVariables.loggedIn = true;
}

async function me() {
  _verifyIsLoggedIn();
  const meRes = await request.get('https://api.onepeloton.com/api/me', {
    cookie: clientVariables.cookie,
  });
  return meRes;
}

interface WorkoutsOptions {
  userId?: String,
  joins?: String
  limit?: Number
  page?: Number
}
async function workouts(options: WorkoutsOptions = {}) {
  _verifyIsLoggedIn();
  const userId = options.userId || clientVariables.userId;
  const joins = options.joins || 'ride';
  const limit = options.limit || 10;
  const page = options.page || 0;

  const workoutQueryParams = querystring.stringify({ joins, limit, page });
  const workoutRes = await request.get(`https://api.onepeloton.com/api/user/${userId}/workouts?${workoutQueryParams}`, {
    cookie: clientVariables.cookie,
  });
  return workoutRes;
}

function _verifyIsLoggedIn() {
  if (!clientVariables.loggedIn) {
    throw new Error('Must authenticate before making API call.');
  }
}

export const peloton = {
  authenticate,
  me,
  workouts,
};
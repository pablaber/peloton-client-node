const querystring = require('querystring');

import request from './request';
import {
  MeResponse,
  UserResponse,
  WorkoutsResponse,
} from './peloton-response-interfaces';

/**
 * The client variables which are stored to maintain a "session" when making requests.
 */
interface ClientVariables {
  loggedIn: Boolean,
  cookie?: Array<String>
  userId?: String
}

const clientVariables: ClientVariables = {
  loggedIn: false,
};

/**
 * Returns the peloton API url for the given path
 * @param {String} forPath - the path to return the ULR for
 * @return {String} the full API url for the given path
 */
function _pelotonApiUrlFor(forPath: String): String {
  return `https://api.onepeloton.com/api${forPath}`;
}

/**
 * Returns the peloton auth URL for the given path
 * @param {String} forPath - the path to return the ULR for
 * @return {String} the full API url for the given path
 */
function _pelotonAuthUrlFor(forPath: String): String {
  return `https://api.onepeloton.com/auth${forPath}`;
}

/**
 * Verifies that the user is logged in by checking the clientVariables.loggedIn status. 
 * @throws {Error} if the user is not logged in
 */
function _verifyIsLoggedIn() {
  if (!clientVariables.loggedIn) {
    throw new Error('Must authenticate before making API call.');
  }
}

interface AuthenticateOptions {
  username: string
  password: string
}

/**
 * Authenticates the given user
 * @param {AuthenticationOptions} options - options used to authenticate
 */
async function authenticate(options: AuthenticateOptions) {
  const loginRes = await request.post(_pelotonAuthUrlFor('/login'), {
    username_or_email: options.username,
    password: options.password,
  });
  clientVariables.cookie = loginRes.headers['set-cookie'];
  clientVariables.userId = loginRes.data.user_id;
  clientVariables.loggedIn = true;
}

/**
 * Gets the current users information
 * @return {Promise<MeResponse>} the me call results
 */
async function me(): Promise<MeResponse> {
  _verifyIsLoggedIn();
  const meRes = await request.get(_pelotonApiUrlFor('/me'), {
    cookie: clientVariables.cookie,
  });
  return meRes.data;
}

interface UserOptions {
  userId?: String
}

/**
 * Get the details of a user specified by a given ID
 * @param {UserOptions} options - user options
 * @return {Promise<UserResponse | MeResponse>} the limited user information if a userId is
 * specified, or your full options if none specified or your own user ID specified
 */
async function user(options: UserOptions = {}): Promise<UserResponse | MeResponse> {
  _verifyIsLoggedIn();
  const userId = options.userId || clientVariables.userId;
  const userRes = await request.get(_pelotonApiUrlFor(`/user/${userId}`), {
    cookie: clientVariables.cookie,
  });
  return userRes.data;
}

interface WorkoutsOptions {
  userId?: String,
  limit?: Number,
  page?: Number,
  joins?: String,
}

/**
 * Fetch the workouts for the currently authenticated user, or a userId specified.
 * @param {WorkoutOptions} options - the options for fetching the workouts
 * @return {Promise<WorkoutsRes>} the workouts call results
 */
async function workouts(options: WorkoutsOptions = {}): Promise<WorkoutsResponse> {
  _verifyIsLoggedIn();
  const userId = options.userId || clientVariables.userId;
  const joins = options.joins || 'ride';
  const limit = options.limit || 10;
  const page = options.page || 0;

  const workoutQueryParams = querystring.stringify({ joins, limit, page });
  const workoutRes = await request.get(_pelotonApiUrlFor(`/user/${userId}/workouts?${workoutQueryParams}`), {
    cookie: clientVariables.cookie,
  });
  return workoutRes.data;
}

export const peloton = {
  authenticate,
  me,
  user,
  workouts,
};
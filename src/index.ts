import querystring = require('querystring');

import request from './request';
import {
  FollowerFollowingResponse,
  MeResponse,
  UserResponse,
  WorkoutPerformanceGraphResponse,
  WorkoutResponse,
  WorkoutsResponse,
} from './interfaces/responses';
import {
  AuthenticateOptions,
  FollowerFollowingOptions,
  WorkoutOptions,
  WorkoutPerformanceGraphOptions,
  WorkoutsOptions,
} from './interfaces/options';

/**
 * The client variables which are stored to maintain a "session" when making requests.
 */
interface ClientVariables {
  loggedIn: boolean,
  cookie?: Array<string>
  userId?: string
}

const clientVariables: ClientVariables = {
  loggedIn: false,
};

/**
 * Returns the peloton API url for the given path
 * @param {string} forPath - the path to return the ULR for
 * @return {string} the full API url for the given path
 */
function _pelotonApiUrlFor(forPath: string): string {
  return `https://api.onepeloton.com/api${forPath}`;
}

/**
 * Returns the peloton auth URL for the given path
 * @param {string} forPath - the path to return the ULR for
 * @return {string} the full API url for the given path
 */
function _pelotonAuthUrlFor(forPath: string): string {
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
  userId?: string
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

/**
 * Returns a list of users who are followed by the specified userId (or authenticated userId if none
 * specified)
 * @param {FollowerFollowingOptions} options - the options to pass into the request
 * @return {Promise<FollowerFollowingResponse>} the list of those being followed by the specified
 * userId
 */
async function followers(options: FollowerFollowingOptions): Promise<FollowerFollowingResponse> {
  const userId = options.userId || clientVariables.userId;
  const limit = options.limit || 10;
  const page = options.page || 0;
  const workoutQueryParams = querystring.stringify({ limit, page });
  const followersRes = await request.get(_pelotonApiUrlFor(`/user/${userId}/followers?${workoutQueryParams}`), {
    cookie: clientVariables.cookie,
  });
  return followersRes.data;
}

/**
 * Returns a list of users following the specified userId (or authenticated userId if none
 * specified)
 * @param {FollowerFollowingOptions} options - the options to pass into the request
 * @return {Promise<FollowerFollowingResponse>} the list of those following the specified userId
 */
async function following(options: FollowerFollowingOptions): Promise<FollowerFollowingResponse> {
  const userId = options.userId || clientVariables.userId;
  const limit = options.limit || 10;
  const page = options.page || 0;
  const workoutQueryParams = querystring.stringify({ limit, page });
  const followingRes = await request.get(_pelotonApiUrlFor(`/user/${userId}/following?${workoutQueryParams}`), {
    cookie: clientVariables.cookie,
  });
  return followingRes.data;
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
  const workoutsRes = await request.get(_pelotonApiUrlFor(`/user/${userId}/workouts?${workoutQueryParams}`), {
    cookie: clientVariables.cookie,
  });
  return workoutsRes.data;
}

/**
 * Fetch information from a specific workout
 * @param {WorkoutOptions} options - request options
 * @return {Promise<WorkoutResponse>} the specified workout details
 */
async function workout(options: WorkoutOptions): Promise<WorkoutResponse> {
  const { workoutId } = options;

  const workoutRes = await request.get(_pelotonApiUrlFor(`/workout/${workoutId}`), {
    cookie: clientVariables.cookie,
  });
  return workoutRes.data;
}

/**
 * Fetch performance graph information from a specific workout
 * @param {WorkoutPerformanceGraphOptions} options - request options
 * @return {Promise<WorkoutPerformanceGraphResponse>} the performance graph data
 */
async function workoutPerformanceGraph(options: WorkoutPerformanceGraphOptions): Promise<WorkoutPerformanceGraphResponse> {
  const { workoutId } = options;
  const every_n = options.everyN || 5;

  const queryString = querystring.stringify({ every_n });
  const workoutPerformanceGraphRes = await request.get(_pelotonApiUrlFor(`/workout/${workoutId}/performance_graph?${queryString}`), {
    cookie: clientVariables.cookie,
  });

  return workoutPerformanceGraphRes.data;
}

export const peloton = {
  authenticate,
  me,
  user,
  followers,
  following,
  workouts,
  workout,
  workoutPerformanceGraph,
};
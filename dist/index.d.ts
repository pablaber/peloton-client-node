import { FollowerFollowingResponse, MeResponse, UserResponse, WorkoutsResponse } from './peloton-response-interfaces';
interface AuthenticateOptions {
    username: string;
    password: string;
}
declare function authenticate(options: AuthenticateOptions): Promise<void>;
declare function me(): Promise<MeResponse>;
interface UserOptions {
    userId?: String;
}
declare function user(options?: UserOptions): Promise<UserResponse | MeResponse>;
interface FollowerFollowingOptions {
    userId?: String;
    limit?: Number;
    page?: Number;
}
declare function followers(options: FollowerFollowingOptions): Promise<FollowerFollowingResponse>;
declare function following(options: FollowerFollowingOptions): Promise<FollowerFollowingResponse>;
interface WorkoutsOptions {
    userId?: String;
    limit?: Number;
    page?: Number;
    joins?: String;
}
declare function workouts(options?: WorkoutsOptions): Promise<WorkoutsResponse>;
export declare const peloton: {
    authenticate: typeof authenticate;
    me: typeof me;
    user: typeof user;
    followers: typeof followers;
    following: typeof following;
    workouts: typeof workouts;
};
export {};

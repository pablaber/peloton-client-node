import { FollowerFollowingResponse, MeResponse, UserResponse, WorkoutsResponse, WorkoutResponse } from './peloton-response-interfaces';
interface AuthenticateOptions {
    username: string;
    password: string;
}
declare function authenticate(options: AuthenticateOptions): Promise<void>;
declare function me(): Promise<MeResponse>;
interface UserOptions {
    userId?: string;
}
declare function user(options?: UserOptions): Promise<UserResponse | MeResponse>;
interface FollowerFollowingOptions {
    userId?: string;
    limit?: number;
    page?: number;
}
declare function followers(options: FollowerFollowingOptions): Promise<FollowerFollowingResponse>;
declare function following(options: FollowerFollowingOptions): Promise<FollowerFollowingResponse>;
interface WorkoutsOptions {
    userId?: string;
    limit?: number;
    page?: number;
    joins?: string;
}
declare function workouts(options?: WorkoutsOptions): Promise<WorkoutsResponse>;
interface WorkoutOptions {
    workoutId: string;
}
declare function workout(options: WorkoutOptions): Promise<WorkoutResponse>;
export declare const peloton: {
    authenticate: typeof authenticate;
    me: typeof me;
    user: typeof user;
    followers: typeof followers;
    following: typeof following;
    workouts: typeof workouts;
    workout: typeof workout;
};
export {};

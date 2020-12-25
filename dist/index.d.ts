import { FollowerFollowingResponse, MeResponse, UserResponse, WorkoutPerformanceGraphResponse, WorkoutResponse, WorkoutsResponse } from './interfaces/responses';
import { AuthenticateOptions, FollowerFollowingOptions, WorkoutOptions, WorkoutPerformanceGraphOptions, WorkoutsOptions } from './interfaces/options';
declare function authenticate(options: AuthenticateOptions): Promise<void>;
declare function me(): Promise<MeResponse>;
interface UserOptions {
    userId?: string;
}
declare function user(options?: UserOptions): Promise<UserResponse | MeResponse>;
declare function followers(options: FollowerFollowingOptions): Promise<FollowerFollowingResponse>;
declare function following(options: FollowerFollowingOptions): Promise<FollowerFollowingResponse>;
declare function workouts(options?: WorkoutsOptions): Promise<WorkoutsResponse>;
declare function workout(options: WorkoutOptions): Promise<WorkoutResponse>;
declare function workoutPerformanceGraph(options: WorkoutPerformanceGraphOptions): Promise<WorkoutPerformanceGraphResponse>;
export declare const peloton: {
    authenticate: typeof authenticate;
    me: typeof me;
    user: typeof user;
    followers: typeof followers;
    following: typeof following;
    workouts: typeof workouts;
    workout: typeof workout;
    workoutPerformanceGraph: typeof workoutPerformanceGraph;
};
export {};

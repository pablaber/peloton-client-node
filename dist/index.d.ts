import { MeResponse, UserResponse, WorkoutsResponse } from './peloton-response-interfaces';
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
interface WorkoutsOptions {
    joins?: String;
    limit?: Number;
    page?: Number;
}
declare function workouts(options?: WorkoutsOptions): Promise<WorkoutsResponse>;
export declare const peloton: {
    authenticate: typeof authenticate;
    me: typeof me;
    user: typeof user;
    workouts: typeof workouts;
};
export {};

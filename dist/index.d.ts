import { MeResponse, WorkoutsResponse } from './peloton-response-interfaces';
interface AuthenticateOptions {
    username: string;
    password: string;
}
declare function authenticate(options: AuthenticateOptions): Promise<void>;
declare function me(): Promise<MeResponse>;
interface WorkoutsOptions {
    joins?: String;
    limit?: Number;
    page?: Number;
}
declare function workouts(options?: WorkoutsOptions): Promise<WorkoutsResponse>;
export declare const peloton: {
    authenticate: typeof authenticate;
    me: typeof me;
    workouts: typeof workouts;
};
export {};

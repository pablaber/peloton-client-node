/// <reference types="node" />
import { IncomingHttpHeaders } from 'http';
interface RequestResponse {
    headers: IncomingHttpHeaders;
    status: number;
    data: any;
}
declare function get(url: string, headers: Record<string, string | string[]>): Promise<RequestResponse>;
declare function post(url: string, body: Record<string, unknown>): Promise<RequestResponse>;
declare const request: {
    get: typeof get;
    post: typeof post;
};
export default request;

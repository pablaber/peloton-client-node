interface RequestResponse {
    headers: any;
    status: Number;
    data: any;
}
declare function get(url: String, headers: Object): Promise<RequestResponse>;
declare function post(url: String, body: Object): Promise<RequestResponse>;
declare const request: {
    get: typeof get;
    post: typeof post;
};
export default request;

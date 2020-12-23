import { IncomingHttpHeaders, IncomingMessage } from 'http';
import https = require('https');
import urlLib = require('url');

interface RequestResponse {
  headers: IncomingHttpHeaders
  status: number
  data: any,
}

/**
 * Performs a GET request on the specified URL
 * @param {String} url - the URL to get
 * @return {Object} the result of the get request
 */
function get(url: string, headers: Record<string, string | string[]>): Promise<RequestResponse> {
  return new Promise((resolve, reject) => {
    const parsedUrl = urlLib.parse(url);
    const options = {
      hostname: parsedUrl.host,
      path: parsedUrl.path,
      method: 'GET',
      headers,
    };

    https
      .request(options, (res: IncomingMessage) => {
        const response = {
          status: res.statusCode,
          headers: res.headers,
        };
        let data = '';

        res.on('data', (d: string) => {
          data += d;
        });

        res.on('end', () => {
          const jsonData = JSON.parse(data);
          resolve({
            ...response,
            data: jsonData,
          });
        });
      })
      .on('error', reject)
      .end();
  })
}

function post(url: string, body: Record<string, unknown>): Promise<RequestResponse> {
  return new Promise((resolve, reject) => {
    const parsedUrl = urlLib.parse(url);
    const stringBody = JSON.stringify(body);
    const options = {
      hostname: parsedUrl.host,
      path: parsedUrl.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': stringBody.length
      }
    };


    https
      .request(options, (res: IncomingMessage) => {
        const response = {
          status: res.statusCode,
          headers: res.headers,
        }
        let data = '';

        res.on('data', (d: string) => {
          data += d;
        });

        res.on('end', () => {
          const jsonData = JSON.parse(data);
          return resolve({
            ...response,
            data: jsonData,
          });
        });
      })
      .on('error', reject)
      .end(stringBody);
  })
}

const request = {
  get,
  post,
};

export default request;
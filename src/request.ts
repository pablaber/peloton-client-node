const https = require('https');
const urlLib = require('url');

interface HttpResponse {
  on: Function
  headers: Object,
  statusCode: Number,
}

interface RequestResponse {
  headers: any,
  status: Number,
  data: any
}

/**
 * Performs a GET request on the specified URL
 * @param {String} url - the URL to get
 * @return {Object} the result of the get request
 */
function get(url: String, headers: Object): Promise<RequestResponse> {
  return new Promise((resolve, reject) => {
    const parsedUrl = urlLib.parse(url);
    const options = {
      hostname: parsedUrl.host,
      path: parsedUrl.path,
      method: 'GET',
      headers,
    };

    https
      .request(options, (res: HttpResponse) => {
        const response = {
          status: res.statusCode,
          headers: res.headers,
        };
        let data = '';

        res.on('data', (d: String) => {
          data += d;
        });

        res.on('end', () => {
          try {
            const jsonData = JSON.parse(data);
            return resolve({
              ...response,
              data: jsonData,
            });
          } catch {
            return resolve({
              ...response,
              data,
            });
          }
        });
      })
      .on('error', reject)
      .end();
  })
}

function post(url: String, body: Object): Promise<RequestResponse> {
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
      .request(options, (res: HttpResponse) => {
        const response = {
          status: res.statusCode,
          headers: res.headers,
        }
        let data = '';

        res.on('data', (d: String) => {
          data += d;
        });

        res.on('end', () => {
          try {
            const jsonData = JSON.parse(data);
            return resolve({
              ...response,
              data: jsonData,
            });
          } catch {
            return resolve({
              ...response,
              data,
            });
          }
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
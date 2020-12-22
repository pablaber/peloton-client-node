"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var https = require('https');
var urlLib = require('url');
function get(url, headers) {
    return new Promise(function (resolve, reject) {
        var parsedUrl = urlLib.parse(url);
        var options = {
            hostname: parsedUrl.host,
            path: parsedUrl.path,
            method: 'GET',
            headers: headers
        };
        https
            .request(options, function (res) {
            var response = {
                status: res.statusCode,
                headers: res.headers
            };
            var data = '';
            res.on('data', function (d) {
                data += d;
            });
            res.on('end', function () {
                try {
                    var jsonData = JSON.parse(data);
                    return resolve(__assign(__assign({}, response), { data: jsonData }));
                }
                catch (_a) {
                    return resolve(__assign(__assign({}, response), { data: data }));
                }
            });
        })
            .on('error', reject)
            .end();
    });
}
function post(url, body) {
    return new Promise(function (resolve, reject) {
        var parsedUrl = urlLib.parse(url);
        var stringBody = JSON.stringify(body);
        var options = {
            hostname: parsedUrl.host,
            path: parsedUrl.path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': stringBody.length
            }
        };
        https
            .request(options, function (res) {
            var response = {
                status: res.statusCode,
                headers: res.headers
            };
            var data = '';
            res.on('data', function (d) {
                data += d;
            });
            res.on('end', function () {
                try {
                    var jsonData = JSON.parse(data);
                    return resolve(__assign(__assign({}, response), { data: jsonData }));
                }
                catch (_a) {
                    return resolve(__assign(__assign({}, response), { data: data }));
                }
            });
        })
            .on('error', reject)
            .end(stringBody);
    });
}
var request = {
    get: get,
    post: post
};
exports["default"] = request;
//# sourceMappingURL=request.js.map
var http = require("http");
var url = require("url");
var querystring = require("querystring");


function startServer(route, handle) {
    var onRequest = function (request, response) {
        //console.log("request received"+request.url);
        var pathname = url.parse(request.url,).pathname;



        var data = "";
        request.on("error", (err) => {
            console.error(err);
        }).on("data", (chunk) => {
            data += chunk;
        }).on("end", () => {
            if (request.method === "POST") {
                route(handle, pathname, response,querystring.parse(data));
            } else {
                var params = url.parse(request.url, true).query;
                route(handle, pathname, response, params);
            }

        });
    }
    var server = http.createServer(onRequest);
    server.listen(8888);
    console.log("IP是 Http://127.0.0.1:8888");
}


module.exports.startServer = startServer;
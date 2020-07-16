var http = require("http");
var fs = require("fs");


function startServer(route,handle){
    var onRequest = function(request,response){
        //console.log("request received"+request.url);
        route(handle,request.url,response);
    }
    var server = http.createServer(onRequest);
    server.listen(8888);
    console.log("IP是 Http://127.0.0.1:8888");
}


module.exports.startServer = startServer;
var fs = require("fs");
var http = require("http");

function home(response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/wwwroot/home.html", "utf8").pipe(response);
}

function nihao(response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/wwwroot/nihao.html", "utf8").pipe(response);
}

function json(response, params) {
    response.writeHead(200, { "Content-Type": "application/json" });

    response.end(JSON.stringify(params));
}

module.exports = {
    home,
    nihao,
    json
};
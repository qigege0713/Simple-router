var server = require("./server");
var router = require("./router");
var handler = require("./handler");

var handle = {};
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle["/nihao"] = handler.nihao;
handle["/json"] = handler.json;

server.startServer(router.route,handle);


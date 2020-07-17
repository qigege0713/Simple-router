var fs = require("fs");

function route(handle,pathname,response,params){
    console.log('目前的路径是'+pathname);
    if(typeof handle[pathname]==='function'){
        handle[pathname](response,params);
    }else{
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream(__dirname+"/wwwroot/404.html","utf8").pipe(response);
    }

}

module.exports = {
    route:route
}
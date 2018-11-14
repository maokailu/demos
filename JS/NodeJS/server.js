var http = require('http');
var url = require('url');
function start(route,handle){
    http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        // 在此次请求中调用路由函数根据路由api进行请求路径和请求处理程序的mapping
        route(handle, pathname, response, request);
    }).listen(8888);
    console.log('Server has started');
}
exports.start = start;
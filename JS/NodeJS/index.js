var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');
// 路由api
var handle = {};
handle['/']=requestHandlers.start;
handle['/start']=requestHandlers.start;
handle['/upload']=requestHandlers.upload;
handle["/show"] = requestHandlers.show;
// 开启服务器并传入路由函数及路由规则
server.start(router.route,handle);
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port : 9998});
var connections = {};
//var boss = {
//    name: 'tiger',
//    message: 'hello! can I help you?'
//};
wss.on('connection',function (ws){
    console.log('connect succesfull');
    var name = ws.upgradeReq.url.split("/")[1];//取出url里#号后面的字符串
    //if(!connections[name]){
        connections[name] = ws;
        //connections.name.port.send(boss);
    //}
    connections[name].on('close',function(e){
        delete connections[name];
        console.log(connections);
    });
    ws.on('message', function (message) {
        var data = JSON.parse(message);
        if (data.name != 'tiger') {
            connections.tiger.send(JSON.stringify(data));
            connections[data.name].send(JSON.stringify(data));
        } else {
            connections.tiger.send(JSON.stringify(data));
            connections[data.to].send(JSON.stringify(data));
        }
    });

});
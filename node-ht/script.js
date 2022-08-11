var http=require("http");
var fs=require("fs");
var options={
    hostname:"127.0.0.1",
    port:3000,
    path:"/",
    method:"GET",
    passphrase:"021221wj",
    agent:false
};
options.agent=new http.Agent(options);
var req=http.request(options,function(res){
    console.log("statuScode:",res.statusCode);
    console.log("headers:",res.headers);
    res.setEncoding('utf-8');
    res.on('data',function(d){
        console.log(d);
    })
})
req.end();
req.on("error",function(e){
    console.log(e);
});
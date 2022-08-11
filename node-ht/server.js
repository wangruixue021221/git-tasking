var http=require("http");
var fs=require("fs");
var options={
    pfx:fs.readFileSync('./keys/server.pfx');
    passphraseL:"021221wj"
}
http.createServer(options,function(req,res){
    res.writeHead(200);
    res.end("hello world");
}).listen(3000,"127.0.0.1");
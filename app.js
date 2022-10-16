const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res)=>{
    if(req.url=="/"){
       fs.readFile("./public/index.html","utf-8",(err,data)=>{
        res.end(data);
        
       })
    }
    else if(req.url.match("\.html$")){
        var htmlpath = path.join(__dirname,'public',req.url);
        var filestream = fs.createReadStream(htmlpath,"utf-8");
        filestream.pipe(res);
    }
    else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname,'public',req.url);
        console.log(cssPath);
        var filestream = fs.createReadStream(cssPath,"utf-8");
        filestream.pipe(res);
    }
    else if(req.url.match("\.jpg$")){
        var imgPath = path.join(__dirname,'public',req.url);
        var imgFile = fs.createReadStream(imgPath);
        imgFile.pipe(res);
    }
    else if(req.url.match("\.png$")){
        var imgPath = path.join(__dirname,'public',req.url);
        var imgFile = fs.createReadStream(imgPath);
        imgFile.pipe(res);
    }
    else if(req.url.match("\.js$")){
        var imgPath = path.join(__dirname,'public',req.url); 
        var imgFile = fs.createReadStream(imgPath,"utf-8");
        imgFile.pipe(res);
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("Page Not Found");
    }
   
});

server.listen(8000);
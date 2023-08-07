const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');

let SERVER_PORT = process.env.SERVER_PORT
let HOST_IP = process.env.HOST_IP

const http = require('http');


let myServer = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.write("Hello developers..")
        res.end();
    }else if(req.url =='/userapi'){
        fs.readFile('./userApi/userapi.json',"utf-8",(err,data)=>{
          console.log(data);
          res.end(data) 
        });
        
    
    }
    
    else{
    res.write("....");
    res.end();}
});

myServer.listen(SERVER_PORT,HOST_IP,()=>{
console.log(`Server is running..! http://${HOST_IP}:${SERVER_PORT}`)
});
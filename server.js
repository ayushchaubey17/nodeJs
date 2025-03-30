const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req,res)=>{
    console.log("request recieved");

    fs.appendFileSync("./log.txt",`  ${req.url} ,${Date.now().toLocaleString()}\n`)
  
  switch (req.url) {
    case "/" || "":
        res.end("home page")
        break;
     case "/about":
            res.end("about page")
            break;
    
    case "/contact":
        res.end("contact page")
        break;
    default:
        res.end("error")
        break;
  }
    
});


let port = 3000;
myserver.listen(port,()=>{
console.log(`server started at port ${port}`)
})


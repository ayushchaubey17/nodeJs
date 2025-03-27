const fs = require("fs");

const os = require("os");
console.log(os.cpus().length)

// console.log("1");
// const res = fs.readFileSync("./text.txt","utf-8");
// console.log(res)
// console.log(2)


console.log("1");
 fs.readFile("./text.txt","utf-8",(err,res)=>{
    console.log(err?err:res);
 });

console.log(2)
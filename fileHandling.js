
const fs = require("fs");
// fs.writeFileSync("text.txt","hello my name is ayush kumar chaubey i am finr");

fs.appendFileSync("./text.txt","everything is fine"+new Date().getDate());

let ans = fs.readFileSync("./text.txt","utf-8")
console.log(ans)


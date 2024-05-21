const fs=require("fs")
console.log("1");
const res=fs.readFileSync('temp.txt',"utf8");
console.log(res);
console.log("2")
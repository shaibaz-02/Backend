const fs=require("fs")
console.log("1");
fs.readFile("temp.txt","utf8",(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});
console.log("2")
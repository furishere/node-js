const fs = require("fs")

// Blocking process where block the process and execute line by line
console.log("1");

const result  = fs.readFileSync("./contact.txt","utf-8")
console.log(result);

console.log("2");
// 1 my number is 9373831 2

// non-blocking.. task
console.log("3");

fs.readFile("./contact.txt","utf-8",(err, result) => {
    console.log(result);
    
})
console.log("4");
// 3 4 my number is 9373831

// Default threat pool size  = 4
// max ? 8 core cpu - 8
 const os = require("os")
 console.log(os.cpus().length); // 4

 // - always write code in non-blocking
 


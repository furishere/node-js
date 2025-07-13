const fs = require("fs")
// we use fs to interact with file

// sync - it will create file and write hey there 
fs.writeFileSync('./text.txt', "hey there!")

// this is async, do same thing but we always return call back function
fs.writeFile('./text.txt', "hey there from Asyc", (err) => {})

//  to read the file
const result = fs.readFileSync("./contact.txt", "utf-8")
console.log(result); // piyush grag : +91234444

// in async it will not return anything but sync will do
fs.readFile("./contact.txt", "utf-8",(err, result) => {
    if(err){
        console.log("err", err);
        
    } else{
        console.log(result);
        
    }
})

// it will log the data again again without deleting the existing content - different from write file
fs.appendFileSync("./test.txt", `hey there\n`)

// to copy the file
fs.cpSync("./test.txt", "copy.txt")

// to delete the file
fs.unlinkSync("./delete.txt")

// to check stats
console.log(fs.statSync("./text.txt"));

console.log(fs.statSync("./text.txt").isFile()); // true

// to create folder
fs.mkdirSync("my-docs")
const fs = require("fs")

// This is how we create file and add data
fs.writeFileSync("./a.txt", "hello there") // this is sync function

fs.writeFile("./a.txt", "hi from async", (err) => {}) // always add err in async 

// This is how we read file
const result = fs.readFileSync("./contact.txt","utf-8")
console.log(result);

// sync always return but async don't, they aceept always callback for error and result
fs.readFile("./contact.txt","utf-8",(err, result) => {
    if(err){
        console.log("Err",err);
        
    }else{
        console.log(result); // my number is 9373831
        
    }
})

// to avoid overwrite
fs.appendFileSync("./a.txt", new Date().getDate().toLocaleString())

fs.appendFileSync("./a.txt",`${new Date().getDate().toLocaleString()}hey there\n`)

// to copy the file
fs.cpSync("a.txt","copy.txt")

// // to delete the file
fs.unlinkSync("./copy.txt")

// to check stats
console.log(fs.statSync("./a.txt").isFile() ); // true

// create new folder
fs.mkdirSync("my-docs")


const fs = require("fs")
const http = require("http")
const url = require("url")

const myServer = http.createServer((req, res) => {
    if(req.url == "/favicon.ico") return res.end();

    const log = `${Date.now()} : ${req.method}${req.url} new request\n`
    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    
    fs.appendFile("log.txt",log, (err, data) => {
        if(err){
            console.log("err", err);
            
        }else{
            console.log(data);
            
        }
    })

    switch(myUrl.pathname){
        case'/':
            if(req.method == "GET") res.end("hello from the server")
        break;
        case'/about':
        const username = myUrl.query.myname
            res.end(`hello ${username}`)
        break;

        case'/search':
        const search = myUrl.query.search_query
        res.end(`here are your result for ${search} `)
        break;

        case'/signup':
        if(req.method == "GET") res.end("this is sign up page")
            else if(req.method == "POST"){
         // DB qyery
        res.end("sucess")
     } 

         
        default:
            res.end("404 not found")
    }
})

myServer.listen(3000, () => {
    console.log("sab sahi hain!");
    
})
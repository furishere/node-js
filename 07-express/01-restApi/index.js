const express = require("express")
const fs = require("fs")
const users = require("./example.json")

const app = express()
const PORT = 3000

// middleware - plug in
app.use(express.urlencoded({extended : false}))

app.use((req, res, next) => {
    fs.appendFile("log.txt",`${Date.now}: ${req.method} : ${req.path}`,(err, dta) => {
        next()
    })
    console.log("hello from middleware 1");
    req.myUsernam = "piyushgarg.dev"
})

app.use((req, res, next) => {
    console.log("hello from middleware 2",req.myUsernam);
    // return res.end("hey")

    // db query
    // credit card info
    req.creditCardnumber = "123"
    next()
})

// Routes
app.get("/users", (req, res) => {
    const html = `
    <ul> 
   ${users.map((user) => `<li> ${user.firstName} </li>`).join("")} 
   </ul>`

   res.send(html)


})

app.get("/api/users", (req, res) => {

    console.log("im in get route", req.myUsernam);
    
// Headers
    res.setHeader("x-myName", "hariom mandal") // custom header
    // Always add x to custom header

    console.log(req.headers);
    
    res.json(users)
})

app.get("/api/users/:id",(req, res) => {
    const id = req.params.id
    const user = users.find((user) => user.id == id)

    return res.json(user)
})

app.post("/api/users", (req, res) => {
    const body = req.body
    users.push({...body, id: users.length + 1})
    fs.writeFile("./example.json", JSON.stringify(users),(err, data) => {
        return res.json({status : "success", id: users.length})
    })
})

app.patch("/api/users/:id", (req, res) => {

})

app.delete("/api/users/:id", (req, res) => {

})

app.listen(PORT, () => console.log("server started at port"))

// to merge task for the same route
// app.route("/api/users").get((req, res) => {

// }).patch((req, res) => {

// })
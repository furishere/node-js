const express = require("express")
const users = require("./example.json")
const fs  = require("fs")
const mongoose = require("mongoose")

const app = express()
const port = 3000

// Middleware - plug in -> it will help to add form info data to body
app.use(express.urlencoded({extended : false}) )

app.use((req, res, next) => {
    console.log("hello from middleware from 1 ");
    // return res.json({msg : "hello from middleware from 1"})

    req.myUsername = "piyush" // -> we made some our own property and everyone can acess (routes, middleware etc..)

    next()
})

app.use((req, res, next) => {
    console.log("hello from middleware from 2 ", req.myUsername);
    // return res.json({msg : "hello from middleware from 2"})

    next() // -> we use next to go next middleware or route
})



// Routes
app.get("/users",(req, res) => {
    const html = `
    <ul>
     ${users.map((user) => `<li> ${user.firstname} </li>`).join("")}
    </ul>`

    res.send(html)
})

app.get("/api/users",(req, res) => {
    // console.log("i am in get route ", req.myUsername);

// Header -> is just a meta information of request and response
    console.log(req.headers);

// custom header - always add x to custom header
    res.setHeader("x-myName", "jane Hawking")
    
    return res.json(users, )
})

app.get("/api/users/:id",(req, res) => {
    const id = req.params.id
    const user = users.find((user) => user.id == id)
    if(!user){
        return res.status(404).json({msg  : "data not found"})
    }
    return res.json(user)
})

app.post("/api/users",(req, res) => {
    const body = req.body
// status code
    if(!body|| !body.firstname || !body.lastname || body.email || body.gender || body.job_title){
        return res.status(400).json({msg : "All fields are required"})
    }
    users.push({...body, id: users.length + 1})
    fs.writeFile("./example.json", JSON.stringify(users), (err, data) => {
        return res.status(201).json({status : "success", id: users.length})
    })
})

app.patch("/api/users/:id",(req, res) => {
    return res.json({status : "pending"})
})

app.delete("/api/users/:id",(req, res) => {
    return res.json({status : "pending"})
})



app.listen(port,() => console.log(`server started at ${port}`))
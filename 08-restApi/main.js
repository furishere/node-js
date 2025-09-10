const express = require("express")
// const users = require("./example.json")
const fs  = require("fs")
const mongoose = require("mongoose")

const app = express()
const port = 3000

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app")
.then(() => console.log("mongo db connected"))
.catch((err) => console.log("mongo error", err))

//Schema - with schema we define structure
const userSchema = new mongoose.Schema({
    firstname :{
        type : String,
        required : true
    },
    lastname : {
        type: String,
    },
    email:{
        type:String,
        required : true,
        unique : true,
    },
    job_title:{
        type : String,
    },
    gender:{
        type: String,
    }

},{timeseries: true})

// now we make model using scchema
const User = mongoose.model("user", userSchema)

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
app.get("/users",async(req, res) => {
    const allDbUsers = await User.find({})
    const html = `
    <ul>
     ${allDbUsers.map((user) => `<li> ${user.firstname}, ${user.email} </li>`).join("")}
    </ul>`

    res.send(html)
})

app.get("/api/users",async(req, res) => {
    // console.log("i am in get route ", req.myUsername);
    const allDbUsers = await User.find({})

// Header -> is just a meta information of request and response
    console.log(req.headers);

// custom header - always add x to custom header
    res.setHeader("x-myName", "jane Hawking")
    
    return res.json(allDbUsers)
})

app.get("/api/users/:id",async(req, res) => {
    // const id = req.params.id
    const user = await User.findById(req.params.id)

    // const user = users.find((user) => user.id == id)
    if(!user){
        return res.status(404).json({msg  : "data not found"})
    }
    return res.json(user)
})

app.post("/api/users",async(req, res) => {
    const body = req.body
// status code
    if(!body|| !body.firstname || !body.lastname || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg : "All fields are required"})
    }
    // users.push({...body, id: users.length + 1})
    // fs.writeFile("./example.json", JSON.stringify(users), (err, data) => {
    //     return res.status(201).json({status : "success", id: users.length})
    // })

    const result  = await User.create({
        firstname:body.firstname,
        lastname:body.lastname,
        email : body.email,
        gender:body.gender,
        job_title:body.job_title,
    })

    return res.status(201).json({msg : "success"})
})

app.patch("/api/users/:id",async(req, res) => {
    await User.findByIdAndUpdate(req.params.id, {lastname: "khan"})
    return res.json({status : "success"})
})

app.delete("/api/users/:id",async(req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.json({status : "success"})
})



app.listen(port,() => console.log(`server started at ${port}`))
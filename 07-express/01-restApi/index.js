const express = require("express")
const users = require("./example.json")

const app = express()

// Routes
app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(3000,() => {
    console.log("hi there");
    
})
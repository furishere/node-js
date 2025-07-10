const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Hello from server")
})

app.get('/about', (req,res) => {
    res.send("Hello from About page ")
})

Port = 8000

app.listen(Port, () => {
    console.log(`server! ${Port}`);
    
})
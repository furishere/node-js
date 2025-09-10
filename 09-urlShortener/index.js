const express = require("express")
const urlRoute = require("./routes/url")
const {connectMongoDB} = require("./connect")

const app = express()
const PORT = 8000

connectMongoDB("mongodb://127.0.0.1:27017/")

app.use("/url", urlRoute)

app.listen(PORT, () => {
    `server started at ${PORT}`
})
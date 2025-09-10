const express = require("express")
const {connectMongoDb} = require("./connection")

const userRouter = require("./routes/user")
const {logReqRes} = require("./middleware/index")

const app = express()
const port = 3000

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app")
.then(() => console.log("mongodb Connected!")
)

// Middleware - plug in -> it will help to add form info data to body
app.use(express.urlencoded({extended : false}) )
app.use(logReqRes("log.txt"))

// Routes
app.use("/api/users", userRouter)

app.listen(port,() => console.log(`server started at ${port}`))
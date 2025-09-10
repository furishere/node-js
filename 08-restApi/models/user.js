const mongoose = require("mongoose")

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

module.exports = User
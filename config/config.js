require('dotenv').config()
const mongoose =  require("mongoose");
const url = process.env.Database
mongoose.connect(url).then(()=>{
    console.log("Database Connected Successfully!")
}).catch((error)=>{
    console.log(error.message)
})
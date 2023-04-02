const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/Registration")
.then(()=>{
    console.log("Database Connected")
})
.catch((e)=>{
    console.log(e)
    console.log("Database connection failed")
})
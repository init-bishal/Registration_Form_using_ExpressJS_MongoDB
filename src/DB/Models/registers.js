const mongoose=require('mongoose')
const validator=require('validator')
const { default: isEmail } = require('validator/lib/isEmail')
const employeeSchema=new mongoose.Schema({
    "firstname":{
          type:String , 
          required:true

    },
    "lastname":{
        type:String , 
        required:true
    }, 
    "email":{
        type:String, 
        required:true, 
        unique:true, 
        validate(val)
        {
            if(!isEmail(val))
            {
                throw new Error("Invalid Email")
            }
        }


    },
    "gender":{
        type:String , 
        required:true, 

    }, 
    "phone":{
        type:Number, 
        required:true , 
        unique:true,
        

    },
    "age":{
        type:Number, 
        required:true

    },
    "password":{
        type:String , 
        required:true, 

    },
    "confirmpassword":{
        type:String, 
        required:true
    }
})
const Register=new mongoose.model("Register",employeeSchema)
module.exports=Register
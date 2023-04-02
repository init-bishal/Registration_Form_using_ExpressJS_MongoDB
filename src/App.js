const express=require("express")
const path=require('path')
require('./DB/conn')
const hbs=require('hbs')
const app=express()
const port=process.env.PORT || 3000 
console.log(__dirname)
const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")
const Register=require("./DB/Models/registers")
app.use(express.static(static_path))
app.set("view engine","hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=> 
{
    res.render("index")
})
app.get('/login',(req,res)=>{
    res.render("login")
})
app.get('/register',(req,res)=>{
    res.render("register")
})
app.post('/register', async (req,res)=>{
    try{
         const pass=req.body.password
         const cpass=req.body.confirmpassword
         if(pass === cpass)
         {
            const resgisterEmployee=new Register({
                firstname:req.body.firstname,
                lastname:req.body.lastname, 
                email:req.body.email,
                gender:req.body.gender,
                phone:req.body.phone, 
                age:req.body.age, 
                password:req.body.password,
                confirmpassword:req.body.confirmpassword


            })
            const result=await resgisterEmployee.save()
            res.status(201).render("index") ;
         }
         else{
            res.send("Password not matching")
         }
    }
    catch(err)
    {
        res.status(404).send(err)
    }
})
app.listen(port,()=>{
    console.log(`Listening at ${port}`)
})

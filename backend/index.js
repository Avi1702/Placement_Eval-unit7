
const express=require("express")
const mongoose=require("mongoose")
const axios=require("axios").default
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const crypto=require("crypto")
const cors=require("cors")
// const fs=require("fs")

const app=express()
app.use(cors())
// cors.use()

app.use(express.json())

const SECRET_KEY="abcd1234"

const Register_schema=mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    verifiedEmail:Boolean,
    verifyEmailOtp:Number
})

const Todo_schema=mongoose.Schema({

    task:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        require:true,
        default:false
        
    },
    tag:{
        type:String,
        require:true
    }
  
})


const Users=new mongoose.model("User",Register_schema)
const Todos=new mongoose.model("Todo",Todo_schema)

const Register=async ()=>{
const connect=await mongoose.connect("mongodb://localhost:27017/Registration")
console.log("connected")   
}

Register()

app.get("/",(req,res)=>{
    res.send("YOu are on home page")
})

app.post("/register",async (req,res)=>{
  
    let {name,email,password}=req.body
  
    password=bcrypt.hashSync(password,10)
    console.log(password)
    const user=await new Users({
      name,
      email,
      password,
      todos:[],
      verifyEmailOtp:crypto.randomInt(10000,100000)
    })

    await user.save()

    res.send("user added successfull")

})

app.post("/login",async(req,res)=>{

    let{email,password}=req.body
    console.log(email.password)
    
    let user=await Users.find({email})

    if(!user){
    return res.status(404).send("user doesn't exit")
    }

    let checkPass=bcrypt.compare(password,user.password)
    // console.log(password)
    if(checkPass){
        const {name,email}=user
        let token=jwt.sign({name,email},SECRET_KEY)
        res.send(token)
    }
})

app.get("/userLoggedIn",(req,res)=>{

    let token=req.headers['auth-token']
    console.log(token)
    res.send(token)
})

app.post("/todo",async (req,res)=>{

console.log(req.body)
    let {task,status,tag}=req.body
     console.log(req.body)

    const todo=await new Todos({
        
        task,
        status,
        tag
      })

      await todo.save()
  
res.send("todo added successfully")

})

app.get("/todos",async(req,res)=>{
    let todos=await Todos.find()
    // console.log(todos)
    res.send(todos)
})

app.patch("/todo/:task",async(req,res)=>{
    let {task}=req.params
    let  {status}=req.body
    
   await Todos.findOneAndUpdate({task,status:status})
    res.send("updated")
})

app.delete("/todo/:task",async(req,res)=>{

    let {task}=req.params
   await Todos.findOneAndDelete({task})

   res.send("todo deleted")

})



app.listen(8000,()=>{
    console.log("logged in")
})
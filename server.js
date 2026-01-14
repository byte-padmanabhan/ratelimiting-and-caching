//npm init -y
//npm install express
//npm install mongoose
//npm install dotenv
//npm install --save-dev nodemon
//express makes making a server easy .a server is something that listens to request and responds .http is the one that is use for transporting
//the data .when you make a request all your doing is sending an http message .
const express=require("express")
const todoroutes=require("./routes/todo")
const connectDB = require("./connect")
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20, // limit each IP to 100 requests per window
    message: "Too many requests from this IP, please try again later."
  });
  
app=express()
app.use(limiter);
app.use(express.json())
connectDB()
app.use('/todo',todoroutes)
app.get('/',(req,res)=>
{
    res.send("hello world")
})
app.listen(8080,()=>{
    console.log("the server is running ")
})

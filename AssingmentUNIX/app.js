require('dotenv').config();
const express=require('express');
const app=express();

const userRouter=require("./api/users/user.router");

app.use(express.json());
app.use("/api/users",userRouter);


app.listen(process.env.App_port,()=>{
console.log("Server up and Running"+ process.env.App_port);

});
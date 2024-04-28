const express=require('express')
const app=express()
const port=5000
const mongoos=require('mongoose')
app.use(express.json())

mongoos.connect("mongodb+srv://mortadha17:mortadha@cluster0.xfnmm3g.mongodb.net/myfirstapp?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("Db connected")).catch((err)=>console.log(err));

app.use("/",require('./routes/userroute'))
app.listen(port,(err)=>{
  err? console.log("error",err):console.log("server is running in port:",port)
})
const express=require('express')
const router=express.Router()
const User=require('../models/userSchema')

router.post("/post",async(req,res)=>{
    try {
        const user=await User.create(req.body)
        res.status(201).json({msg:"user created",user})
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong",err:error})
    }
  })
  router.get("/getusers",async(req,res)=>{
    try {
        const user=await User.find()
        res.status(201).json({msg:"Get all Users",user})
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong",err:error})
    }
  })
  router.delete("/delete/:id",async(req,res)=>{
    try {
        console.log(req.params.id)
        const userdeleted=await User.findByIdAndDelete("6601730f3fe99d1ffb249336")
        res.status(201).json({msg:"user deleted",userdeleted})
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong",err:error})
    }
  })


  module.exports=router
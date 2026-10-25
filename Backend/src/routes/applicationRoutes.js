const express=require("express");
const Application= require("../models/application.js");
const router=express.Router();

router.post("/",async (req,res)=> {
    try{
        const application=await Application.create(req.body);
        res.status(201).json(application);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

module.exports=router;
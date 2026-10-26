const express=require("express");
const Application= require("../models/application.js");
const router=express.Router();
const authMiddleware=require("../middleware/authMiddleware.js");

router.post("/",authMiddleware,async (req,res)=> {
    try{
        const application=await Application.create(req.body);
        res.status(201).json(application);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

router.get("/",authMiddleware,async (req,res)=> {
    try{
        const applications=await Application.find();
        res.status(201).json(applications);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

router.put("/:id",authMiddleware,async (req,res)=> {
    try{
        const application=await Application.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators:true}
        );
        if(!application){
            return res.status(404).json({message:"Application not found"});
        }
        res.status(200).json(application);
    }catch(error){
        res.status(500).json({messgae:error.message});
    }
});

router.delete("/:id",authMiddleware,async (req,res)=> {
    try{
        const application=await Application.findByIdAndDelete(req.params.id);
        if(!application){
            return res.status(404).json({
                message:"Application not found"
            });
        }
        res.status(200).json({message:"Application deleted successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

module.exports=router;
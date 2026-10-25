const mongoose= require("mongoose");
const applicationSchema=new mongoose.Schema(
    {
        company:{
            type:String,
            required:true,
            trim:true
        },
        role:{
            type:String,
            required:true,
            trim:true
        },
        appliedDate:{
            type:Date,
            required:true
        },
        status:{
            type:String,
            enum:["Applied","Interview","Offer"],
            default:"Applied"
        }
    },
    {
        timestamps:true
    }
);

module.exports=mongoose.model("Application",applicationSchema);
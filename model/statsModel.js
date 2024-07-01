import mongoose from "mongoose";


const statsSchema = new mongoose.Schema({
    cpu : {
        type : String, 
        required : true,
    }, memory : { 
        type : String, 
        required : true,
    },
    timestamp : { 
        type : Date,
        required  :true
    }
})

export default mongoose.model("stats",statsSchema)

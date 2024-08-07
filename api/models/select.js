import mongoose from 'mongoose' 

const SelectShema =  new mongoose.Schema({


    userId:{
        type:String,
        required:true
    },

    select:{
        type:String
    }
},{timestamps:true})


const Select = mongoose.model("Select",SelectShema)

export default Select
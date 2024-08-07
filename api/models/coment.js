import mongoose from 'mongoose' 

const ComentSchema = new mongoose.Schema({


    content:{
        type:String,
        required:true
    },

  

    userId:{
        type:String,
        required:true
    },

    
    username:{
        type:String,
        required:true
    },

    profilePicture:{
        type:String,
    
    }


  
},{timestamps:true})

const Comment = mongoose.model("Comment",ComentSchema)

export default Comment
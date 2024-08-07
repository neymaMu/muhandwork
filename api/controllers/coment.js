import Comment from "../models/coment.js" 



export const createComent =async (req,res,next) => {

    try{
   
        const{content,postId,userId,username,profilePicture} = req.body 

        if(userId !== req.user.id){
           console.log("error")
        }


     const Newcoment = new Comment({content,postId,userId,username,profilePicture})
    
      await Newcoment.save()

   
  
   
   
   
   
   
      res.status(200).json(Newcoment)
    
    }
    catch(error){
        next(error)
    }
 } 



 export const getComent = async(req,res) => {

    try{

   const coment = await Comment.find()

    res.status(200).json(coment)
    
    
    }
    catch(error){
        res.status(500).json(error)
    }
 } 

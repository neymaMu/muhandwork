import Comment from "../models/coment.js" 



export const createComent =async (req,res) => {

    try{
   
        const{content,userId,username,profilePicture} = req.body 

        

     const Newcoment = new Comment({content,userId,username,profilePicture})
    
      await Newcoment.save()

   
  
   
   
   
   
   
      res.status(200).json(Newcoment)
    
    }
    catch(error){
        console.log(error)
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

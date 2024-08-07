import User from '../models/user.js'
import bcryptjs from 'bcryptjs'

import jwt from 'jsonwebtoken' 




export const Signup = async(req,res,next) =>{

   try{

 const{username,email,password} = req.body 

 if(!username || !email || !password || username === "" || email === "" || password === ""){
   console.log("error")
 }

 const hashpassword = bcryptjs.hashSync(password,10)


 const NewUser = new User({username,email,password:hashpassword})
 
  await NewUser.save()
 res.status(200).json({message:"new User have been Saved"})
 
 
   }
   catch(error){
    next(error)
   }
}


//sign in 


export const SignIn =async(req,res,next) =>{

try{

    const{email,password} = req.body 


    if(!email || !password || email=== "" || password === ""){
     console.log("error")
    }


  const validUser = await User.findOne({email})
  
  if(!validUser){
  console.log("error")
  }

  const validPassword = bcryptjs.compareSync(password,validUser.password)
   
  if(!validPassword){
  console.log("error")
  }
 
  
 const token = jwt.sign({id:validUser._id,isAdmin:validUser.isAdmin},"hhh",{expiresIn:"1d"})
 
 const{password:pass, ...rest} = validUser._doc

 res.status(200).cookie("access_token",token,{httpOnly:true}).json(rest)
 
 

}
catch(error){
 next(error)
}
}  



export const getAllusers = async(req,res,next) => {
   
 
    try{
  
      const newposts = await User.find()
     
      
   
   
    
      res.status(200).json(newposts)

    }
    catch(error){
      next(error)
    
  }
 
  
   
 
 

 } 
 
import React,{useState,useContext} from 'react'
import{  Textarea} from 'flowbite-react'
import{UserContext} from '../context/UserContext'
import CommentScroll from './CommentScroll'

import { IoIosSend } from "react-icons/io";

const Coment = ({newpo,setNewpo}) => {
 


 const {user}=useContext(UserContext)
 
  const[comment,setComment] = useState()
  
  
 


 


 





  
  
  
  const handleSubmit = async(e) => {
    e.preventDefault() 

    if(comment.length >  200){
     return
    }
     
    try{
     const res = await fetch(`http://localhost:4000/api/coment/create`,{
       credentials: "include",
     method:"POST",
    
       headers:{
         "Content-Type" : "application/json",
         'x-auth-token': "JWT_SECRET",
       },
      
       body:JSON.stringify({content:comment,userId:user._id,username:user.username,profilePicture:user.profilePicture})
      })
     
     
       const data = await res.json()
       if(res.ok){
       
        setComment('')
      
       }
    }
    catch(error){
     console.log(error)
    
    }
   
}
  
  
  const handleClick = async() => {
    try{
      const res = await fetch(`http://localhost:4000/api/select/${newpo._id}`,{
        credentials: "include",
        method:"DELETE",
      })
      const data = await res.json()
    
      if(res.ok){
        setNewpo([])
      }
        }
        catch(error){
          console.log(error)
        }
  }


  





 







return (
   
   <div className="flex w-[300px] mt-10 flex-col fixed space-y-5 ">
   
 

 
 
 










<div className=" ">




{newpo.select  &&<form className='  rounded-md p-3' onSubmit={handleSubmit}>









<div className="flex bg-blue-800 mt-[10px] rounded-lg flex-col ">


<button type="submit" className="flex justify-end">
<IoIosSend className="text-white text-lg" />
</button>




<div onClick={handleClick} className="text-white cursor-pointer">@{newpo.select}</div>
<div className="flex   items-center ">




<Textarea className="border-0 h-[80px] text-white focus:ring-0 bg-blue-800"

    placeholder='add a Comment...'
    rows='3'
    maxLength='200'
    onChange={(e) => setComment(e.target.value)}
     value={comment}
    
  
  />


</div>


  </div>




      </form>}
</div>

 
  
  
  
  
  
  
  
  
  
  
  
  
  
   <div className="w-[330px] mt-[30px] ">
  

   
 <CommentScroll/>
  
  </div>
   

   
  
   
   
   
   
   <div >
    
    
      
   
    
   
    
    
      </div>
    
    </div>
  )
}

export default Coment
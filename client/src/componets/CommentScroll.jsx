import React,{useState,useEffect,useRef} from 'react'
import ComentPage from './ComentPage'



const CommentScroll = () => {
 
    const[comments,setComments] = useState([])
    
    
    
    const fetchComent = async() => {

        try{
      
        const res = await fetch("https://muhandwork.onrender.com/api/coment/getcoment",{
          credentials: "include",
          
            method:"GET",
         
            headers:{"Content-Type":"application/json"},
       
       
        })
          if(res.ok){
          const data = await res.json()
          setComments(data)
         }
        
        }
        catch(error){
          console.log(error)
        }
       }
       
       useEffect(() => {
        fetchComent()
      },[])  
 
 
   
   
   
      return (
    <div className="border mt-20 px-4 flex-1 overflow-auto h-80 space-y-5 rounded-xl    border-1 border-green-500">
      {comments.map((comen,index) => (
     
        <ComentPage key={index} comen={comen} />
       
       
      ))}
    </div>
  )
}

export default CommentScroll
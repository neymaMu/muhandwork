import React,{useRef,useEffect} from 'react'




const ComentPage = ({comen}) => {
 
  
    const lastMessageRef = useRef();
    useEffect(() => {
      setTimeout(() => {
          lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
  }, []);
 

    return (
  <div ref={lastMessageRef}className="" >


<div className="bg-green-100 rounded-lg" >
<div className="flex items-center">

<img src={comen.profilePicture} alt="" className="h-10 w-10 rounded-full"/>

<div   className="text-gray-500">@{comen.username}</div>
</div>



<p   className="break-all text-blue-800">{comen.content}</p>



</div>


  </div>
  
  

  )
}

export default ComentPage
import express from 'express';
import { Server } from "socket.io";


import http from 'http';

import mongoose from 'mongoose'
import Document from './Document.js'

import cookieParser from 'cookie-parser'
import cors from 'cors'

import ComentUser from './routes/coment.js'
import AuthUser from './routes/user.js'
import SelecUser from './routes/select.js'
import path from 'path'




const app = express()

app.use(express.json())

app.use(cors({origin:"https://muhandwork.onrender.com",credentials:true}));
app.use(cookieParser())
const server = http.createServer(app);





mongoose.connect("mongodb+srv://j4116507:0JWcQEPTfu0yxQxP@cluster0.nfqnxbb.mongodb.net/")
.then(() => console.log("DB Connected"))
.catch((error) => console.log(error))

const __dirname = path.resolve();
server.listen(4000,()=> {
    console.log("server is runing")
}) 



app.use("/api/user",AuthUser)
app.use("/api/coment",ComentUser)
app.use("/api/select",SelecUser)






const io = new Server(server, {
    cors: 'https://muhandwork.onrender.com', 
  });

  

  io.on("connection",function(socket)  {
    
    socket.on("get-document",async documentId => {
      const document = await findOrCreateDocument(documentId)
      socket.join(documentId)
      socket.emit("load-document",document.data)
      socket.on("send-changes",delta => {
      socket.broadcast.to(documentId).emit("receive-changes",delta)
    })
     socket.on("save-document",async data => {
      await Document.findByIdAndUpdate(documentId,{data})
     })
  })
  })
  
  
  
  async function findOrCreateDocument(id) {
      if (id == null) return
    
      const document = await Document.findById(id)
      if (document) return document
      return await Document.create({ _id: id, data: defaultValue })
    }
  
  
  
    app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
    

  
  

  
  
  
  
  
  
  
  
  
  






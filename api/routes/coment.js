import express from 'express' 
const router = express.Router() 
import VerifyUser from '../VerifyUser.js'
import {createComent,getComent } from '../controllers/coment.js'





router.post("/create",VerifyUser,createComent)
router.get("/getcoment",VerifyUser,getComent)








export default router
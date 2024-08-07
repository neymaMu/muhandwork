import express from 'express' 
const router = express.Router() 
import { verifyToken } from '../utils/verifyUser.js'
import {createComent,getComent } from '../controllers/coment.js'





router.post("/create",verifyToken,createComent)
router.get("/getcoment",verifyToken,getComent)







export default router
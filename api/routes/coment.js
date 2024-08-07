import express from 'express' 
const router = express.Router() 

import {createComent,getComent } from '../controllers/coment.js'

import{verifyToken} from '../utils/verifyUser.js'



router.post("/create",verifyToken,createComent)
router.get("/getcoment",verifyToken,getComent)








export default router
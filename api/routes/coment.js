import express from 'express' 
const router = express.Router() 

import {createComent,getComent } from '../controllers/coment.js'





router.post("/create",createComent)
router.get("/getcoment",getComent)







export default router
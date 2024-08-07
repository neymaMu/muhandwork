import express from 'express'
const router = express.Router() 
import{SelectText,getSelect} from '../controllers/select.js'
import {verifyToken} from '../utils/verifyUser.js'



router.post("/sele",SelectText)
router.delete("/:id",getSelect)


export default router
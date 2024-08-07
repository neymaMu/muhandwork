import express from 'express'
import { SignIn, Signup,getAllusers } from '../controllers/user.js'
import {verifyToken} from '../utils/verifyUser.js'

const router = express.Router() 

router.post("/signup",Signup)

router.post("/signIn",SignIn)
router.get("/getuser",getAllusers)

export default router
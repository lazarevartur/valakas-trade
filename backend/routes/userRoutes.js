import express from 'express'
import { regUser } from '../controller/authCtrl.js'

const router = express.Router()

router.route('/').post(regUser)

export default router

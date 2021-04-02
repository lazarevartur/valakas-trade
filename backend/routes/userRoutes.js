import express from 'express'
import { regUser, login } from '../controller/authCtrl.js'

const router = express.Router()

router.route('/').post(regUser)
router.route('/login').post(login)

export default router

import express from 'express';
import passport from 'passport';
import { regUser, login, addProgramsMrx } from '../controller/authCtrl.js';
import { jwtGuard } from '../middleware/passport.js';
import { repleWallet } from '../middleware/payment/repleWallet.js';

const router = express.Router();
//auth routs and ref
// /api/auth
router.route('/register').post(regUser);
router.route('/login').post(login);
//router.route('/addCoast').post([jwtGuard()], repleWallet);
router.route('/byMrxProgram').post([jwtGuard(), repleWallet], addProgramsMrx);

export default router;

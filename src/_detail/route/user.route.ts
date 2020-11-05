import { ITokenService } from './../../domain/useCase/abstractions/ITokenService';
import { JwtokenService } from './../services/jwtoken.service';
import { VerifyUC } from './../../domain/useCase/verify.uc';
import { LoginUC } from './../../domain/useCase/login.uc';
import { Router } from 'express';

const SECRET = "xtyx123";
const router = Router();

//services
const jwtService:ITokenService = new JwtokenService(SECRET);
//use case
const loginUC = new LoginUC(jwtService);
const verifyUC = new VerifyUC(jwtService);
//routes
router.post('/login',(req,res)=>loginUC.exec(req,res));
router.get('/verify',(req,res)=> verifyUC.exec(req,res));

module.exports = router;
import { ITokenService } from './abstractions/ITokenService';
export class LoginUC{
    constructor(private readonly tokenService:ITokenService){}

    exec(req,res){        
        //1. create token
        let token = this.tokenService.create(req.body);             
        //2.response token
        res.status(200).json({token});
    }
}
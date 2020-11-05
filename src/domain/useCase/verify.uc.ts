import { SuccessEnum } from './enums/success.enum';
import { ErrorEnum } from './enums/error.enum';
import { ITokenService } from './abstractions/ITokenService';
export class VerifyUC{
    constructor(private readonly tokenService:ITokenService){}

    exec(req,res){
        const token = <string>req.headers["bearer"];
        try {
            this.tokenService.verify(token);   
            res.status(200).send(SuccessEnum.VERIFICADO);
        } catch (error) {
            res.status(401).send(ErrorEnum.ERROR_TOKEN);
        }        
    }
}
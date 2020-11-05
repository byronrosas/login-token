export interface ITokenService{
    create(content:any);
    verify(token:string);
}
var cors = require('cors');
import {createServer, Server} from 'http';
import * as express from 'express';
const bodyParser = require('body-parser');
const userRoute = require('./_detail/route/user.route');

const PORT = 3100;
export class Nodeserver{    
    private app:express.Application;
    constructor(){
        //server
        this.app = express();
        //body
        this.app.use(bodyParser.json());

        //routes
        this.app.use('/',userRoute)
        //cors
        this.app.use(cors({
            credentials:true,            
            origin:'*'
        }));      
        

        let server:Server = createServer(this.app);        
        
        //init server
        server.listen(PORT,()=>{
            console.log("Server started => %s",PORT);
        });
    }

    getApp(){
        return this.app;
    }
}
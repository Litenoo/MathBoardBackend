import * as net from 'net';
import logger from './logger';

export default class UnixSocketCommunication{
    protected client;

    constructor(socketPath = "../../mathBoardAlgoMLFork/MathBoardAlgoML/build/socket"){
        this.client = net.createConnection(socketPath, ()=>{
            console.log("Connected to the unix socket!");
        });

        this.client.on("error", (err: Error)=>{
            logger.error(err.stack);
        });

        this.client.on("close",()=>{
            console.log("Unix socket connection closed");
        });

        this.client.on("data", (data)=>{
            console.log(`Received data, ${data}`);
        });
    }
}
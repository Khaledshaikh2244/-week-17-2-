import { WebSocketServer } from "ws";


const wss = new WebSocketServer ({port : 8080});


let userCount = 0;
let AllSocket = [];

wss.on("connection", (socket) =>{
    AllSocket.push(socket);
    userCount = userCount + 1;
    console.log("user count" + userCount);

    socket.on("message",(message) =>{
        console.log("message",message.toString());
        socket.send("mesasge",(message : any)=> {
           console.log("message",message.toString());

           for (let index = 0; index < AllSocket.length; index++) {
            const element = AllSocket[index];

            element.send(message.toString()+ ": sent frrom server" );
           }
        })
    })
    
    
});
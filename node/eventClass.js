const EventEmitter = require("events");
class Chat extends EventEmitter{
    pingMsg(msg)
    {
        console.log(`message sent : ${msg}`);
        this.emit("notify", msg);
    }
}
const chat= new Chat();
chat.on("notify", (msg)=>{
    console.log(`notification sent : ${msg}`);
});
chat.pingMsg("order received");
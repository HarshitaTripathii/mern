const EventEmitter = require("events");
class Chat extends EventEmitter {
    constructor() {
        super();
        this.users = new Set();

    }
    join(user) {
        this.users.add(user);
        this.emit("join", user);
    }
    notifyMsg(user, msg) {
        if(this.users.has(user)){
            console.log(`${user} exists`);
            this.emit("notification", user, msg);
        }
        else{
            console.log(`${user} exists`);
        }


    }
    leave(user) {
        if(this.users.has(user))
        {
            this.users.delete(user);
            this.emit("leave", user);
        }
        else{
            console.log(`${user} doesn't exists`);
        }

    }
}
const chat= new Chat();
chat.on("join", (u)=>{
    console.log(`${u} has entered the chat`);
});
chat.on("notification", (u, m)=>{
    console.log(`${u} has joined: ${m}`);

})
chat.on("leave", (u)=>{
    console.log(`${u} has left the chat`);
})
chat.join( "Harshita");
chat.join( "Vishu");
chat.notifyMsg("Vishu", "joined" );
chat.leave("Harshit");
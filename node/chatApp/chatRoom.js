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
module.exports=Chat;
const EventEmitter=require("events");
const emitter= new EventEmitter();

emitter.on("error", (e)=>
{
    console.log(`error printed ${e.message}`);
})
emitter.emit("error", new Error("error 404 : Something went wrong"));
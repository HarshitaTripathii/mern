//"events" module exports a class called EventEmitter
const EventEmittervent=require("events");
//emitter is an object
const emitter= new EventEmittervent();
const notify= (u)=>{
    console.log(`You entered ${u}`);
}
//first provide listeners(/callbacks/subscriptions)
//emitter.on(eventName, callback);
//callback means : things to happen, when the eventname has been emitted 
emitter.on("greet", (name)=>{
    console.log(`welcome ${name}`)
});
emitter.on("wish", notify);
emitter.on("greet", notify);


//then publish an event
emitter.emit("greet", "Harshita");
emitter.emit("greet", "Arya");
emitter.removeListener("greet", notify);
emitter.emit("greet", "Yashi");
emitter.emit("wish","Sidd" );

//who all are listening to event, eventName : greet
console.log(emitter.listeners("greet"));

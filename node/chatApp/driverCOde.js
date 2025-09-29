const Chat= require('./Chat')
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
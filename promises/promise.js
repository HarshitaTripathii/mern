// console.log("Harshita");

function getData(data, dataFxn) {
    setTimeout(() => {
        console.log("data", data);
        if(dataFxn){
            dataFxn();
        }
    }, 2000);
}

// wrong way of callback
// getData(1, getData(2) );

// below is called as, CallBack hell : nested call back, which is a mess for complex code, solution : promises
getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4);
        });
    });
});


import React, {useState, useEffect} from "react";

const Counter = ()=>{
    const [count, setCount]=useState(0);
    // console.log("before useEffect : compo");
    useEffect(()=>{
        // console.log("inside useEffect : compo");
        console.log("toggle mounted");

        return function()
        {
            console.log("toggle unmounted");
        }
    }, [count]);

    // return function will be executed , when this compo gets unmounted
    

    return (
        <>
        <p >Counter : {count}</p>
        <button onClick={()=>{setCount(count+1)}} className="gap-6 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">Increase</button>
        <button onClick={()=>{setCount(count-1)}} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">Decrease</button>
        <p>value is {count%2==0 ?"Even" : "Odd"}</p>
        </>
    )
}
export default Counter;
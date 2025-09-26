import React, {useState, useEffect} from "react";

const Counter = ()=>{
    const [count, setCount]=useState(0);
    // console.log("before useEffect : compo");
    useEffect(()=>{
        // console.log("inside useEffect : compo");
        console.log("toggle mounted")

        return function()
        {
            console.log("toggle unmounted");
        }
    }, [count]);

    // return function will be executed , when this compo gets unmounted
    

    return (
        <>
        <p >Counter : {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>
        <p>value is {count%2==0 ?"Even" : "Odd"}</p>
        </>
    )
}
export default Counter;
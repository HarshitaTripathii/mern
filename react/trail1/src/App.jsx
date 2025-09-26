import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setVisible]=useState(false);
  // console.log("before effct: app");
  // useEffect(()=>{
  //   console.log("inside effect : app");
  // }, []);
//App renders body first
// Then Counter renders body
// After paint → Counter’s effect runs
// Then App’s effect runs

  return (
    <>
    {isVisible ? <Counter />:<></>}
    
     <button onClick={()=>{setVisible(!isVisible)}}>Swtich</button>
    </>
  )
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //    <h1 className="underline decoration-red-100 text-red-50 bg-blue-700">
  //     harshita is great !!
  //    </h1>
  //   </>
  // )
}

export default App

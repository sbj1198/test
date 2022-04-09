import { useState } from "react"

export const Counter = ({initial}) =>{

    const [counter, setCounter] = useState(initial);

    const handleChange = (value) =>{
        if(value === 2) setCounter(counter * value);
        else setCounter(counter + value);
    }

    return (
        <div>
            {/* <h3></h3> */}
            {counter % 2 !== 0 ? <h3 style={{color: "red"}}>Counter: {counter}</h3> : <h3 style={{color: "green"}}>Counter: {counter}</h3>}
            <button onClick={()=>handleChange(1)}>Inc 1</button>
            <button onClick={()=>handleChange(-1)}>Dec 1</button>
            <button onClick={()=>handleChange(2)}>Double</button>
        </div>
    )

}
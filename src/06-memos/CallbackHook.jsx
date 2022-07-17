import { useCallback, useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { ShowIncrement } from "./ShowIncrement"



export const CallbackHook = () => {
   
    const [counter, setCounter] = useState(10)

    const incremetFather = useCallback(
      (value) => {
        setCounter( (c) => c + value )
      },
      [],
    )
    

    // const incremetFather = () => {
    //     setCounter(counter + 1)
    // }
    
 
    return (
   <>
        <h1>useCallBack Hook: { counter }  </h1>
        <hr/>
        <ShowIncrement increment={ incremetFather } />
   </>
  )
}

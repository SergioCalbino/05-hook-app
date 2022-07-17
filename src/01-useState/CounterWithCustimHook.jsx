import { useCounter } from "../hooks/useCounter"



export const CounterWithCustimHook = () => {


        const {counter, increment, decrement, reset} = useCounter() //El destructoring que hago aca, depende de lo que retorne mi customHook. Es decir, si retoran un objeto, hago destructorin de objeto. Si devuelve arreglo, destructuro un arreglo

        

  return (
    <>

        <h1>Counter with Hook: {counter} </h1>
        <hr/>

        <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
        <button className="btn btn-primary" onClick={() => reset () }>Reset</button>
        <button className="btn btn-primary" onClick={() => decrement(2) }>-1</button>
        

    </>
  )
}

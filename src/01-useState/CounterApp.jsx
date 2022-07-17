import { useState } from "react"




export const CounterApp = () => {

    const [state, useCounter] = useState({ // Cuando tenemos un objeto en el useState, debemos preservar todos los valores, sino el resto se pierde
        counter1:10, 
        counter2:20,
        counter3:30
    })


    const {counter1, counter2, counter3} = state // state es el valor que tiene el estado inicialmente. De esta forma le paso el valor del estado a los counter 1,2 y 3

    const onButtonClick = () => {
        useCounter( {
            ...state, 
            counter1: counter1 +1}) // Con el Spreed operator mantengo el valor de los estado de counter 2 y 3 asi no los pierdo. Solo actualizo el de counter 1
    }

  return (
   <>
   

        <h1>Counter1:{ counter1 } </h1>
        <h1>Counter2:{ counter2 } </h1>
        <h1>Counter3:{ counter3 } </h1>

        <hr/>

        <button  className="btn" onClick={onButtonClick}>+1</button>
       

   </>
  )
}

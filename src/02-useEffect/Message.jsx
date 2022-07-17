import { useEffect, useState } from "react"




export const Message = () => {

  const [coords, setCoords] = useState({x : 0, y: 0}) //// x e Y son los eventos del movimiento del mouse, por eso los puedo destructurar

    useEffect( () => {

      const onMouseMove = ({ x, y} ) => { // x e Y son los eventos del movimiento del mouse, por eso los puedo destructurar
       // const coords = { x, y };
       setCoords( {x, y} )
        console.log(coords)

      }

      window.addEventListener( 'mousemove', onMouseMove)
       
      
     
    
      return () => {
        window.removeEventListener( 'mousemove' , onMouseMove )
       
      }
    }, [])
    

  return (
    <>

        <h3> Usuario ya existe </h3>
        {
          JSON.stringify(coords)
        }
    </>
  )
}

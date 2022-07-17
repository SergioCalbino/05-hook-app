import { useEffect, useState } from "react"
import { Message } from "./Message";




export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email: 'sergito@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => { //destructuro el event
        const { name, value } = target
        setformState({
            ...formState,
            [ name ]: value //De esta forma reemplazos el e.target.name y el e.target.value
        })
    };

    // useEffect( () => {
    //   console.log('UseEffect se ha cargado')
    // }, []);
    
    // useEffect( () => {
    //   console.log('FormState  ha cambiado')
    // }, [formState]);
    
    // useEffect( () => {
    //   console.log('email  ha cambiado')
    // }, [email]);
    



  return (
    <>
        <h1> Formulario Simple </h1>
        <hr/>

        <input
            type='text'
            classname='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={ onInputChange }
        />
        <input
            type='email'
            classname='form-control mt-2'
            placeholder='email'
            name='email'
            value={email}
            onChange={ onInputChange }
            
        />


        {
           ( username === 'strider2') && <Message/>
        }


    </>
  )
}

import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";




export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm( { // Recordemos que FormState y OnInputchange son propiedades que retorna la funcion useForm, por eso las destructuro en este componente
        username:'' ,
        email: '',
        password: ''
    })

    const { username, email, password } = formState // destructuro formState con sus propiedades
    
   

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
        <h1> Formulario con Custom Hook </h1>
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
        <input
            type='password'
            classname='form-control mt-2'
            placeholder='contraseña'
            name='password'
            value={password}
            onChange={ onInputChange }
            
        />


       <button  onClick={ onResetForm } className="btn btn-primary" mt="2">Borrar</button>


    </>
  )
}

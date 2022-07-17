import { Link, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from './HomePage';
import { AboutPage } from './AbautPage';
import { LoginPage } from './LoginPage';
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";



export const MainApp = () => {
  return (
    <UserProvider>
        
       <NavBar/>

        <hr/>

        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/about" element={ <AboutPage /> }/>
            <Route path="/login" element={ <LoginPage /> }/>
            <Route path="/*" element={ <Navigate to='/about' />}/> //Esta ruta permite que cuando se ingresa una ruta inexistente te devuelve a donde le indiques en el Navigate
        </Routes>


        </UserProvider>
  )
}

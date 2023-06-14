import {  Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>MainApp</h1>
        {/* <Link to="/" className="m-2">Home</Link>
        <Link to="/about" className="m-2">About</Link>
        <Link to="/login" className="m-2">Login</Link> */}
        <Navbar/>
        <hr />
        
        <Routes>
            <Route path="/" element={<HomePage/>}/> //el path apunta al elemenet
            <Route path="/login" element={<LoginPage/>}/> 
            <Route path="/about" element={<AboutPage/>}/>

            {/* <Route path="/*" element={<AboutPage/>}></Route>  */}//si se pone cualquie nombre en la ruta redirige a aboutpage
            <Route path="/*" element={<Navigate to="/about"/>}/>//si se pone cualquie nombre en la ruta redirige a aboutpage
        </Routes>
    </UserProvider>
  )
}

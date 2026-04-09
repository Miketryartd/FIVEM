import {  useEffect } from "react";
import { useNavigate } from "react-router"



function App() {

const nav = useNavigate();

useEffect(() =>{
  nav('/Home');
})


  return (
    <>
     </>
  )
}

export default App

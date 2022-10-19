import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link} from "react-router-dom"
import { Login } from "./Login";


export const RequiredAuth = ({children})=>{
    const [tokens, setToken] = useState("");
    const login = useSelector((state) => state.login);
  //   const login = useSelector((state) => state.login);
   let tokk=login?.token
  
    useEffect(()=>
    {
      setToken(tokk)
    },[tokk])

    if(tokens) return children;


    return <Login />
}
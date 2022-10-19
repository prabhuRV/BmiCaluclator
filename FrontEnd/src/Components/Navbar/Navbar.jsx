import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { Link as ReachLink, useNavigate } from "react-router-dom";
export const Navbar = () => {
let email=localStorage.getItem("email")
const [name, setName] = useState("")
const navigate = useNavigate();
const getProfile=async(email)=>
{
let res=await fetch(`http://localhost:8080/user/profile/${email}`)
let data=await res.json()
setName(data.data.name)
}
useEffect(() => {
  if(email)
  {

    getProfile(email)
  }
}, [email])


const handdlelogout=()=>
{
  localStorage.removeItem("email")
  localStorage.removeItem("token")
  let token=localStorage.getItem("token")

  if(token===null)
  {
    getProfile("")
    navigate("/SignUp")
  }

}
  return (
    <Box height={"50px"} gap={"50px"} bgColor="red.500" fontSize={"20px"}>

      <Flex justifyContent={"space-between"}   color={"white"}>
        <Box ml={"20px"} fontSize={"30px"}>   <Link as={ReachLink} to="/">
        BMI CALUCLATOR
      </Link></Box>
        <Box
      display={"flex"}
      gap="40px"
      justifyContent="right"
      color={"white"}
      marginRight="20px"
    >
       <Link as={ReachLink} to="/dashboard">
        DashBorad
      </Link>
      <Link as={ReachLink} to="/login">
        Login
      </Link>
      <Link as={ReachLink} to="/SignUp">
      SignUp
      </Link>
      <Flex justifyContent={"space-around"}>
      <Box>{name}</Box>
   <Button onClick={handdlelogout} bgColor="blue.300"><span>Logout</span></Button>
      </Flex>
   
    </Box>
      </Flex>
      
  
  
</Box>
  )
}

import React, { useState } from 'react'
import {  Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { addinTodo } from '../../Redux/BmiData/action';
export const MatricUnits = () => {
    const [formData,setFormData]=useState({})
    const [bmi,setBmi]=useState("")
    const dispatch = useDispatch();
const handleChange = (e) => {
    const inputName = e.target.name;
    // console.log(inputName);
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      });
    
  };
 console.log(formData)
  const haddleSubmit = (e) => {
    e.preventDefault();
  //console.log("hai")
   let calSquaremeter=(formData.height*0.01).toFixed(2)

 
let payload={height:calSquaremeter,weight:formData.weight}

let bmi=(formData.weight/payload.height).toFixed(2)
setBmi(bmi)
if (payload) {
    dispatch(addinTodo(payload))
  }
    
  };
  return (
    <div>
        <Flex
      
      align={'center'}
      justify={'center'}
      bg={""}>
      <Stack spacing={8}  w="500px" >
    

<form onSubmit={haddleSubmit}>
        <Box
         rounded={"lg"}
          bg={""}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} >
            <FormControl id="email">
              <FormLabel>Height :</FormLabel>

              <Flex> <Input  type="text"
          placeholder="Ex 180 cm"
          name="height"
          onChange={handleChange} />
        </Flex>
             
            </FormControl>

            <FormControl id="weight">
              <FormLabel>Weight :</FormLabel>
              <Input  type="text"
          placeholder="Enter yours weight"
          name="weight"
          onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
             
              <Stack spacing={10} pt={2}>
                <Input
                  type={"submit"}
                  loadingText="Caluclate"
                  value={"Caluclate"}
                  size="lg"
                  bg={"#3c07ff "}
                  color={"white"}
                  _hover={{
                    bg: "#3c07ff ",
                  }}
                  rounded={"50px"}
                />
              </Stack>
            </Stack>
          </Stack>
        
        </Box>
        </form>

      </Stack>
     
    </Flex>
    <Box>
    {
    bmi? <Heading>Result : {bmi} kg/m2 </Heading>:""
  }
</Box>
    </div>
  )
}

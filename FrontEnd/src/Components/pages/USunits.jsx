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
    Buttun,
    useColorModeValue
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { addinTodo } from '../../Redux/BmiData/action';
export const USunits = () => {
const [formData, setFormData] = useState({})
const [bmi,setBmi]=useState("")
    const handleChange = (e) => {
        const inputName = e.target.name;
        // console.log(inputName);
          setFormData({
            ...formData,
            [inputName]: e.target.value,
          });
        
      };
  const dispatch = useDispatch();
      const haddleSubmit = (e) => {
          e.preventDefault();
let calSquaremeter=(formData.feet*0.3048)+(formData.inch*0.0254)
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
          placeholder="Ex 5 Feet"
          name="feet"
          onChange={handleChange} />
          <Input  type="text"
          placeholder="Ex 10 Inch"
          name="inch"
          onChange={handleChange}  /></Flex>
             
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

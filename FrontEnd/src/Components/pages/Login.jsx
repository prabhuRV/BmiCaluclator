import React, { useContext, useEffect, useState } from "react";
import {
  Flex,
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
  useColorModeValue,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { postLogi } from "../../Redux/Login/action";


export const Login = () => {
  
  const [formData,setFormData]=useState({

  })
  const [tokens, setToken] = useState("");
  const [message, setMassge] = useState("");
  const login = useSelector((state) => state.login);
//   const login = useSelector((state) => state.login);
 let tokk=login?.token

 let mes=login?.message
// console.log(login)
  useEffect(()=>
  {
    setMassge(mes)
    setToken(tokk)
  },[tokk,mes])
  localStorage.setItem('token', tokens)
  const dispatch=useDispatch()
  
 // console.log(tokens);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (tokens) {

      setTimeout(()=>
      {

        navigate("/");
      },3000)
    }
  }, [tokens]);


  const handleChange = (e) => {
    const inputName = e.target.name;
    // console.log(inputName);
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      });
    
  };
 
  const haddleSubmit = (e) => {
    e.preventDefault();
    var value = formData;
    localStorage.setItem("email",value.email)
    console.log(value)
    if (value) {
      postLogi({
        value,
        dispatch
      })
    }
    
  };
  return (<Box>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} w="500px" py={12} px={6}>
        <Stack align={'center'}>

          {message?<Heading color={"green"}>{message}</Heading>:<Heading color={"green"}>{message}</Heading>}
          <Heading fontSize={'md'}>Please enter your e-mail and password:</Heading>
         
        </Stack>

<form onSubmit={haddleSubmit}>
        <Box
         rounded={"lg"}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} >
            <FormControl id="email">
              <FormLabel>Email address or UserName</FormLabel>
              <Input  type="text"
          placeholder="Enter yours username"
          name="email"
          onChange={handleChange}  rounded={"50px"} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Password</FormLabel>
              <Input  type="password"
          placeholder="Enter yours password"
          name="password"
          onChange={handleChange}  rounded={"50px"} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Stack spacing={10} pt={2}>
                <Input
                  type={"submit"}
                  loadingText="Submitting"
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

        <Box textAlign={"center"}>
      <Text fontSize={"14px"} fontFamily={"Roboto, sans-serif"} color="gray" onClick={()=>navigate("/SignUp")}>New customer?Create an account</Text>
    </Box>
      </Stack>
     
    </Flex>
   
    </Box>
  );
};

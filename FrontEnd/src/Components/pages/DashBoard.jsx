import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Redux/BmiData/action';

export const DashBoard = () => {

    const { bmi } = useSelector((state) => state.bmi);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [])
  
  return (
    <Box>
  {bmi.data==="Please login again"?<Box>{bmi.data}</Box>:""}
        <TableContainer width={"60%"} margin={"auto"}>
    <Table variant='striped' colorScheme='teal'>
      
      <Thead>
        <Tr>
          <Th>height(meter)</Th>
          <Th>weight(Kgs)</Th>
          <Th>BMI</Th>
          
        </Tr>
      </Thead>
      <Tbody>
     
        {bmi.data?.data&&bmi.data?.data?.map((ele)=>
        {
          return (
            <Tr>
              <Td><span>{ele.height}</span></Td>
              <Td>{ele.weight}</Td>
              <Td>{ele.bmi} kg/m2</Td>
       
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  </TableContainer>

    </Box>
  )
}

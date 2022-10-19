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
import React, { useState } from "react";
import { MatricUnits } from "./MatricUnits";
import { USunits } from "./USunits";

export const BmiCalucator = () => {
  const [usunits, setUsunits] = useState(false);
  const [matric, setMatric] = useState(true);
  const [formData, setFormData] = useState({});

  const haddleUS = () => {
    setUsunits(true);
    setMatric(false);
  };

  const handdleMatric = () => {
    setUsunits(false);
    setMatric(true);
  };

  return (
    <Box textAlign={"center"}>
      <Button onClick={haddleUS} bgColor={usunits ? "pink" : ""}>
        {" "}
        Units
      </Button>
      <Button onClick={handdleMatric} bgColor={matric ? "yellow" : ""}>
        Matric Units
      </Button>
      {usunits && (
        <Box
          border={"solid"}
          width="400px"
          height={"300px"}
          margin="auto"
          bgColor={""}
        >
          <USunits />
        </Box>
      )}
      {matric && (
        <Box
          border={"solid"}
          width="400px"
          height={"300px"}
          margin="auto"
          bgColor={""}
        >
          <MatricUnits />
        </Box>
      )}
    </Box>
  );
};

import React, { useState } from "react";
import {
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const initState = {
  FName: "",
  LName: "",
  Email: "",
};

const Form1 = ({getFrom1Data}) => {
  const [data, setData] = useState(initState);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
    getFrom1Data(data);
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Payment Details
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            onChange={handleChange}
            name={"FName"}
            value={data.FName}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            placeholder="First name"
            onChange={handleChange}
            name={"LName"}
            value={data.LName}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          onChange={handleChange}
          name={"Email"}
          value={data.Email}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </>
  );
};

export default Form1;

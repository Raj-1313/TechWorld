import React, { useState } from "react";

import Recaptcha from "./Recaptcha/Recaptcha";

import {
  Box,
  Flex,
  FormControl,
  Text,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Button,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";

const SignupMainFrom = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [show, setShow] = React.useState(false);
  const toast = useToast()
  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  return (
    <FormControl w={"85%"}>
      <Flex justify={"space-between"} flexDirection={"column"}>
        <Box>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}>
              Username
            </Text>
          </FormLabel>
          <Input
            type="text"
            name="username"
            placeholder="Enter A Username"
            bg={"white"}
            size={{ base: "sm", md: "md", lg: "lg" }}
            value={signupData.username}
            onChange={handleChange}
          />
        </Box>

        <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}>
              Email Address
            </Text>
          </FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Enter A Email"
            bg={"white"}
            size={{ base: "sm", md: "md", lg: "lg" }}
            value={signupData.email}
            onChange={handleChange}
          />
        </Box>

        <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}>
              Password
            </Text>
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              name="password"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              bg={"white"}
              size={{ base: "sm", md: "md", lg: "lg" }}
              value={signupData.password}
              onChange={handleChange}
            />
            <InputRightElement
              width="4.5rem"
              display={"flex"}
              align={"center"}
              justify={"center"}
            >
              <Button
                mt={"0.2rem"}
                onClick={handleClick}
                fontSize={"12px"}
                bg={"transparent"}
                colorScheme={"white"}
                color={"black"}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box color={"red"}>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={1}
            pt="1rem"
            fontSize={{ base: "0.8rem", md: "1rem", lg: "1.3rem" }}
          >
            <GridItem>Minimum 8 characters</GridItem>
            <GridItem>1 number (0-8)</GridItem>
            <GridItem>1 lowercase letter</GridItem>
            <GridItem>1 uppercase letter</GridItem>
          </Grid>
          <Grid
            pt={"0.4rem"}
            fontSize={{ base: "0.8rem", md: "1rem", lg: "1.3rem" }}
          >
            <GridItem>1 special character (from standard US keyboard)</GridItem>
          </Grid>
        </Box>

        <Box pt={{ base: "1.5rem", md: "1.5rem", lg: "1.3rem" }}>
          <Input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            bg={"white"}
            size={{ base: "sm", md: "md", lg: "lg" }}
            value={signupData.password2}
            onChange={handleChange}
          />
        </Box>

        <Box
          w={{ base: "100%", md: "70%", lg: "60%" }}
          pt={{ base: "1.5rem", md: "1.5rem", lg: "1.3rem" }}
          align="left"
        >
          <Recaptcha />
        </Box>

        <Box pt={{ base: "1.5rem", md: "1.5rem", lg: "1.3rem" }}>
          <Button
            type="submit"
            w={"100%"}
            borderRadius={"1rem"}
            bg="#39B7FF"
            color="white"
            _hover={{
              background: "white",
              color: "#39B7FF",
              border: "3px solid #39B7FF",
            }}
          >
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}>
              CREATE ACCOUNT
            </Text>
          </Button>
        </Box>
      </Flex>
    </FormControl>
  );
};

export default SignupMainFrom;

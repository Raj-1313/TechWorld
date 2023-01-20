import React, { useEffect, useState } from "react";

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
  Select,
} from "@chakra-ui/react";
import countryNames from "../../../Assets/CountryName";
import { useDispatch, useSelector } from "react-redux";
import { signup, signupReset } from "../../../Redux/SignupRedux/Signup.Actions";
import { useNavigate } from "react-router-dom";

const SignupMainFrom = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    mobile: "",
    country: "India",
    gender: "",
    email: "",
    password: "",
    password2: "",
  });

  const [show, setShow] = React.useState(false);
  const toast = useToast();
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupStatus = useSelector((store) => store.signup);
  const { data } = signupStatus;
  console.log("data: ", signupStatus);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleLogin = () => {
    let { name, mobile, country, email, password, password2 } = signupData;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!name || !mobile || !country || !email || !password || !password2) {
      toast({
        title: "Sign Up Failed",
        description: "Fill all the Credentials",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (!/\d/.test(password)) {
      toast({
        title: "Sign Up Failed",
        description: "Password must have 1 Number (0-9)",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (!/[A-Z]/.test(password)) {
      toast({
        title: "Sign Up Failed",
        description: "Password must have 1 Uppercase Letter (A-Z)",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (!/[a-z]/.test(password)) {
      toast({
        title: "Sign Up Failed",
        description: "Password must have 1 Lowercase Letter (a-z)",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (password.length < 8) {
      toast({
        title: "Sign Up Failed",
        description: "Password minimum 8 Characters needed",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (!specialChars.test(password)) {
      toast({
        title: "Sign Up Failed.",
        description:
          "Password must have 1 special character (from standard US keyboard)",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (password !== password2) {
      toast({
        title: "Sign Up Failed.",
        description: "Password is not Matched",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      dispatch(signup(signupData));
    }
  };

  useEffect(() => {
    if (data && data === "User already exists") {
      toast({
        title: `${data} Please Login`,
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top",
      });

      setSignupData({ name: "", mobile: "", gender: "", country: "", email: "", password: "", password2: "" });

      setTimeout(() => {
        navigate("/login");
      }, 2200);
    } else if(signupStatus.isSignup) {
      toast({
        title: "Account created",
        status: "success",
        duration: 1200,
        isClosable: true,
        position: "top",
      });

      setSignupData({ name: "", mobile: "", gender: "", country: "", email: "", password: "", password2: "" });

      setTimeout(() => {
        navigate("/login");
      }, 2200);
    } else if(signupStatus.isError) {
      toast({
        title: "Sign Up Failed.",
        description: "404 Error URL Is Not Working",
        status: "error",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
    }

    dispatch(signupReset());
  }, [data, toast, dispatch, signupStatus.isSignup, navigate, signupStatus.isError]);

  return (
    <FormControl w={"85%"}>
      <Flex justify={"space-between"} flexDirection={"column"}>
        {/* Name Input */}
        <Box>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}>
              Name
            </Text>
          </FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Enter A Name"
            bg={"white"}
            size={{ base: "sm", md: "md", lg: "lg" }}
            value={signupData.name}
            onChange={handleChange}
          />
        </Box>

        {/* Mobile Number Input */}
        <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}>
              Mobile No
            </Text>
          </FormLabel>
          <Input
            type="number"
            name="mobile"
            placeholder="Enter A Mobile Number"
            bg={"white"}
            size={{ base: "sm", md: "md", lg: "lg" }}
            value={signupData.mobile}
            onChange={handleChange}
          />
        </Box>

        {/* Country Select */}
        <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}>
              Country
            </Text>
          </FormLabel>
          <Select
            placeholder="Select option"
            size={{ base: "sm", md: "md", lg: "lg" }}
            bg={"white"}
            name={"country"}
            value={signupData.country}
            defaultValue={"India"}
            onChange={handleChange}
          >
            {countryNames &&
              countryNames.map((country) => <option>{country}</option>)}
          </Select>
        </Box>

        {/* Gender */}
        <Box pt={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
          <FormLabel>
            <Text fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}>
              Gender
            </Text>
          </FormLabel>
          <Select
            placeholder="Select option"
            size={{ base: "sm", md: "md", lg: "lg" }}
            bg={"white"}
            name={"gender"}
            value={signupData.gender}
            onChange={handleChange}
          >
            <option>Male</option>
            <option>Female</option>
          </Select>
        </Box>

        {/* Email Address */}
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

        {/* First Password */}
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
            fontSize={{ base: "0.65rem", md: "0.9rem", lg: "1rem" }}
          >
            <GridItem>Minimum 8 characters</GridItem>
            <GridItem>1 number (0-8)</GridItem>
            <GridItem>1 lowercase letter</GridItem>
            <GridItem>1 uppercase letter</GridItem>
          </Grid>
          <Grid
            pt={"0.4rem"}
            fontSize={{ base: "0.65rem", md: "0.9rem", lg: "1rem" }}
          >
            <GridItem>1 special character (from standard US keyboard)</GridItem>
          </Grid>
        </Box>

        {/* Confirm Password */}
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
            onClick={handleLogin}
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

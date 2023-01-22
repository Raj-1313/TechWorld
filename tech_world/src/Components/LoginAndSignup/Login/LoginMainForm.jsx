import React, { useEffect, useState } from "react";

import {
  Box,
  Flex,
  FormControl,
  Text,
  FormLabel,
  Input,
  Button,
  Checkbox,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, resetLogin } from "../../../Redux/LoginRedux/Login.Actions";

const LoginMainFrom = () => {
  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const loginStatus = useSelector((store) => store.login);
  console.log("loginStatus: ", loginStatus);
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const handleChange = (e) => {
    let { type, value } = e.target;
    setLogindata({ ...loginData, [type]: value });
  };

  const handleLogin = () => {
    let { email, password } = loginData;

    if (!email || !password) {
      toast({
        title: "Log In Failed",
        description: "Fill all the Credentials",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else if (!email.includes("@")) {
      toast({
        title: "Log In Failed",
        description: "Enter A Valid Email",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      dispatch(login(loginData));
    }
  };

  useEffect(() => {
    if (loginStatus.data === 'Signup Please') {
      toast({
        title: "Log In Failed",
        description: "Don't Have Any Account With This Email Signup First",
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top",
      });

      setTimeout(() => {
        navigate("/signup");
      }, 2000);
    } else if (loginStatus.data === 'Invalid credentials') {
      toast({
        title: "Log In Failed",
        description: "Wrong Email Or Password",
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    } else if (loginStatus.isAuth && loginStatus.data.token) {
      toast({
        title: "Log In Successful",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    dispatch(resetLogin());
  }, [dispatch, loginStatus.data, loginStatus.isAuth, navigate, toast]);

  return (
    <FormControl w={"85%"} mb={"1.5rem"}>
      <Flex justify={"space-between"} flexDirection={"column"}>
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
            value={loginData.email}
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
              name="password1"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              bg={"white"}
              size={{ base: "sm", md: "md", lg: "lg" }}
              value={loginData.password}
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

        <Flex align={"center"} py={{ base: "1rem", md: "1rem", lg: "1.3rem" }}>
          <Text as="span" mr={"0.3rem"}>
            Remember Me
          </Text>
          <Checkbox bg={"white"} border={"0.5px solid"} size={"sm"}></Checkbox>
        </Flex>

        <Box>
          <Button
            type="submit"
            w={"100%"}
            borderRadius={"1rem"}
            colorScheme="blue"
            onClick={handleLogin}
          >
            LOGIN
          </Button>
        </Box>
      </Flex>
    </FormControl>
  );
};

export default LoginMainFrom;

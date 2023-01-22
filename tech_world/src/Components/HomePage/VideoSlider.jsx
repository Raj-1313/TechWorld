import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const VideoSlider = () => {
  return (
    <Flex
      bg={"#F7F7F7"}
      w={{
        base: "100%",
        sm: "100%",
        md: "94.6%",
        lg: "94.6%",
        xl: "94.6%",
        "2xl": "94.6%",
      }}
      m={"3rem auto"}
      p={{base: "0", "2xl":"2rem"}}
      display={{
        base: "table",
        sm: "table",
        md: "flex",
        lg: "flex",
        xl: "flex",
        "2xl": "flex",
      }}
    >
      <Box
        w={{
          base: "85%",
          sm: "85%",
          md: "50%",
          lg: "50%",
          xl: "50%",
          "2xl": "50%",
        }}
        mx={"auto"}
      >
        <video autoPlay muted loop>
          <source
            src="http://global-shop.inf.miui.com/c51f4df2d285d6c7783c9b4bb6d59de9"
            type="video/mp4"
          />
        </video>
      </Box>
      <Box
        bg={"white"}
        w={{
          base: "85%",
          sm: "85%",
          md: "50%",
          lg: "50%",
          xl: "50%",
          "2xl": "50%",
        }}
        mx={"auto"}
        py={{base: "3rem",sm: "3rem",md: "4rem",lg: "4rem",xl: "4rem","2xl":"4rem"}}
      >
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={{base: "0.9rem",sm: "0.9rem",md: "1rem",lg: "1rem",xl: "1rem","2xl":"1rem"}}
          color={"#FF6900"}
        >
          Share the Thrill
        </Text>
        <Heading textAlign={"center"} fontSize={{base: "1.3rem",sm: "1.3rem",md: "1.8rem",lg: "1.8rem",xl: "1.8rem","2xl":"1.8rem"}} my={{base: "0.4rem",sm: "0.5rem",md:"0.6rem",lg: "0.8rem",xl: "0.8rem","2xl":"0.8rem"}}>
          Xiaomi 12 Pro
        </Heading>
        <Text fontSize={{base: "0.8rem", sm: "0.8rem", md: "0.8rem", lg: "1rem", xl: "1rem", "2xl": "1rem"}} textAlign={"center"} margin={"auto"} w={{base:"70%",sm:"70%",md:"65%",lg:"65%",xl:"65%","2xl":"65%"}} mb={"0.6rem"}>
          What Happens when we send a xiaomi creator to the alps with Xiaomi 12
          Pro
        </Text>
        <Flex
          align={"center"}
          fontWeight={"bold"}
          justify={"center"}
          fontSize={{base: "0.9rem",sm: "0.9rem",md: "1rem",lg: "1rem",xl: "1rem","2xl":"1rem"}}
          _hover={{ color: "#FF6900", cursor: "pointer" }}
        >
          Learn More <IoIosArrowForward />
        </Flex>
      </Box>
    </Flex>
  );
};

export default VideoSlider;

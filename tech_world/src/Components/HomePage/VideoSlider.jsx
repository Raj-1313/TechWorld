import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const VideoSlider = () => {
  return (
    <Flex bg={"white"} w={"95%"} m={"3rem auto"} p={"2rem"}>
        <Box w={"50%"}>
        <video autoPlay muted loop>
            <source
              src="http://global-shop.inf.miui.com/c51f4df2d285d6c7783c9b4bb6d59de9"
              type="video/mp4"
            />
          </video>
        </Box>
        <Box w={"50%"} py={"4rem"}>
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={"0.9rem"} color={"#FF6900"}>Share the Thrill</Text>
            <Heading textAlign={"center"} fontSize={"1.8rem"} my={"0.8rem"}>Xiaomi 12 Pro</Heading>
            <Text textAlign={"center"} margin={"auto"} w={"65%"} mb={"0.6rem"}>
                What Happens when we send a xiaomi creator to the alps with Xiaomi 12 Pro
            </Text>
            <Flex align={"center"} fontWeight={"bold"} justify={"center"} _hover={{color: "#FF6900", cursor:"pointer"}}>
                Learn More <IoIosArrowForward/>
            </Flex>
        </Box>
    </Flex>
  )
}

export default VideoSlider
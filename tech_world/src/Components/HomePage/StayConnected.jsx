import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const StayConnected = () => {
  return (
    <Box w={"100%"} background={"black"} p={"4rem"} color={"white"}>
      <Heading fontSize={"1.2rem"} mb={"0.8rem"}>
        Stay connected
      </Heading>
      <Box borderBottom={"0.1px solid gray"} mb={"2rem"}></Box>
      <Flex justify={"space-between"}>
        <Box
          w={"47%"}
          backgroundImage="url(https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/na/homepage/subscribe/DownloadAPP-PC.jpg.thumb.webp)"
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
          p={"1.2rem"}
        >
          <Heading w={"60%"} pb={"1rem"} fontSize={"1.6rem"}>
            Shop With Exclusive Benefits
          </Heading>
          <Text fontSize={"0.9rem"} w={"50%"} mb={"6rem"}>
            Download OnePlus store app on Google Play
          </Text>
          <Button colorScheme="white" variant="outline" px={"5rem"} _hover={{color: "#2B6CB0"}}>
            Google Play
          </Button>
        </Box>
        <Box
          w={"47%"}
          backgroundImage="url(https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/in/homepage/sms-subscribe/Subscribe-PC.jpg)"
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
          p={"1.2rem"}
        >
          <Heading w={"60%"} pb={"1rem"} fontSize={"1.6rem"}>
            Always be the first to know.
          </Heading>
          <Text fontSize={"0.9rem"} w={"50%"} mb={"3rem"}>
            Sign up for our SMS!
          </Text>
          <Text w={"50%"} fontSize={"0.7rem"} color={"#FFFFFF8C"} mb={"1rem"}>
            Subscribe to receive news, promotions and recommendations about
            OnePlus products and services from OnePlus, its agencies and
            partners.
          </Text>
          <Button colorScheme="white" variant="outline" px={"5rem"} _hover={{color: "#2B6CB0"}}>
            Subscribe Now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default StayConnected;

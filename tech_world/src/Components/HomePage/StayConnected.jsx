import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const StayConnected = () => {
  return (
    <Box
      w={"100%"}
      background={"black"}
      p={{
        base: "1.75rem",
        sm: "1.75rem",
        md: "4rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "4rem",
      }}
      color={"white"}
    >
      <Heading fontSize={"1.2rem"} mb={"0.8rem"}>
        Stay connected
      </Heading>
      <Box borderBottom={"0.1px solid gray"} mb={"2rem"}></Box>
      <Grid
        gap={"6"}
        templateRows={{base: "repeat(2, 1fr)",sm: "repeat(2, 1fr)",md: "repeat(1, 1fr)",lg: "repeat(1, 1fr)",xl: "repeat(1, 1fr)","2xl":"repeat(1, 1fr)"}}
        templateColumns={{base: "repeat(1, 1fr)",sm: "repeat(1, 1fr)",md: "repeat(2, 1fr)",lg: "repeat(2, 1fr)",xl: "repeat(2, 1fr)","2xl":"repeat(2, 1fr)"}}
      >
        <GridItem
          p={"1.2rem"}
          backgroundImage="url(https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/na/homepage/subscribe/DownloadAPP-PC.jpg.thumb.webp)"
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
        >
          <Text
            w={{
              base: "90%",
              sm: "85%",
              md: "60%",
              lg: "60%",
              xl: "60%",
              "2xl": "60%",
            }}
            pb={{
              base: "0.5rem",
              sm: "0.5rem",
              md: "1rem",
              lg: "1rem",
              xl: "1rem",
              "2xl": "1rem",
            }}
            fontSize={{
              base: "1.1rem",
              sm: "1.1rem",
              md: "1.6rem",
              lg: "1.6rem",
              xl: "1.8rem",
              "2xl": "1.8rem",
            }}
          >
            Shop With Exclusive Benefits
          </Text>
          <Text
            fontSize={{
              base: "0.8rem",
              sm: "0.8rem",
              md: "0.9rem",
              lg: "0.9rem",
              xl: "0.9rem",
              "2xl": "0.9rem",
            }}
            w={"50%"}
            mb={{base:"3rem",sm:"3rem",md:"6rem",lg:"6rem",xl:"6rem","2xl":"6rem"}}
          >
            Download OnePlus store app on Google Play
          </Text>
          <Button
            fontWeight={400}
            colorScheme="white"
            variant="outline"
            px={"5rem"}
            _hover={{ color: "#2B6CB0" }}
          >
            Google Play
          </Button>
        </GridItem>
        
        <GridItem
          p={"1.2rem"}
          backgroundImage="url(https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/in/homepage/sms-subscribe/Subscribe-PC.jpg)"
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
        >
          <Heading w={"60%"} pb={"1rem"} fontSize={"1.6rem"}>
            Always be the first to know.
          </Heading>
          <Text fontSize={"0.9rem"} w={"50%"} mb={"6rem"}>
            Sign up for our SMS!
          </Text>
          <Text w={"52%"} fontSize={"0.8rem"} color={"#FFFFFF8C"} mb={"1rem"}>
            Subscribe to receive news, promotions and recommendations about
            OnePlus products and services from OnePlus, its agencies and
            partners.
          </Text>
          <Button
            fontWeight={400}
            colorScheme="white"
            variant="outline"
            px={"5rem"}
            _hover={{ color: "#2B6CB0" }}
          >
            Subscribe Now
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default StayConnected;

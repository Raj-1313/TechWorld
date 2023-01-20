import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HomeProducts = () => {
  const [data, setData] = useState([]);
  console.log("data: ", data);

  const getData = async () => {
    let data = await axios.get(
      "https://fine-cyan-millipede-boot.cyclic.app/product"
    );
    setData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box mb={"2rem"} py={"1rem"}>
      <Heading as={"h3"} size="lg" pl={"4rem"} py={"1.5rem"}>
        Hottest Phones
      </Heading>
      <Grid
        px={"4rem"}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        pb={"1rem"}
      >
        <GridItem
          rowSpan={1}
          colSpan={2}
          borderRadius={"0.8rem"}
          overflow={"hidden"}
        >
          <Image
            borderRadius={"0.8rem"}
            alt={"ad"}
            src={
              "https://image01.realme.net/general/20221028/1666941089554.jpg.webp"
            }
            w={"100%"}
            transition={"0.3s all ease-in-out"}
            _hover={{
              transform: "scale(1.05)",
              transformOrigin: "center",
            }}
          />
        </GridItem>
        {data &&
          data.slice(0, 8).map((item) => (
            <GridItem
              colSpan={1}
              bg="white"
              borderRadius={"0.8rem"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              alignItems={"center"}
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", cursor: "pointer" }}
            >
              <Box textAlign={"center"} overflow={"hidden"}>
                <Image src={item.img_url} alt={item.model} w={"100%"} />
              </Box>
              <Box fontWeight={"bold"}>{item.model}</Box>
              <Box fontWeight={"bold"} color={"#E6462E"}>
                ₹{+item.approx_price_EUR * 88}
              </Box>
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};

export default HomeProducts;

import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  const [data, setData] = useState([]);

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
    <Box
      mb={"2rem"}
      py={{
        base: "0rem",
        sm: "0rem",
        md: "4rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      }}
    >
      <Heading
        as={"h3"}
        size="lg"
        pl={{
          base: "0rem",
          sm: "0rem",
          md: "4rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "4rem",
        }}
        py={"1.5rem"}
        textAlign={{ base: "center", sm: "center" }}
      >
        Hottest Phones
      </Heading>
      <Grid
        px={{
          base: "1.75rem",
          sm: "1.75rem",
          md: "4rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "4rem",
        }}
        templateRows={{
          base: "repeat(5, 1fr)",
          sm: "repeat(5, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
          "2xl": "repeat(2, 1fr)",
        }}
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(5, 1fr)",
          xl: "repeat(5, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
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
            <Link to={`/product/${item._id}`}>
              <GridItem
                p={"1rem"}
                colSpan={1}
                bg="white"
                borderRadius={"0.8rem"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-around"}
                alignItems={"center"}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  cursor: "pointer",
                }}
              >
                <Box textAlign={"center"} overflow={"hidden"}>
                  <Image src={item.img_url} alt={item.model} w={"100%"} />
                </Box>
                <Box fontWeight={"bold"}>{item.model}</Box>
                <Box fontWeight={"bold"} color={"#E6462E"}>
                  ₹{+item.approx_price_EUR * 88}
                </Box>
              </GridItem>
            </Link>
          ))}
      </Grid>
    </Box>
  );
};

export default HomeProducts;
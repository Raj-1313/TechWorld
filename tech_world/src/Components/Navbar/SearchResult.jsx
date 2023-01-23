import { Box, Button, Flex, Grid, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { AddItem } from "../../Redux/CartRedux/action";
import Navbar from "./Navbar";
import cardStyle from "./SearchResult.module.css";

const SearchResult = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const toast = useToast();
  // console.log("teda hai er mera hai", state.AllData);

  const Addproduct = (id) => {
    dispatch(AddItem({ productID: id })).then((res) => {
      return toast({
        title: "Item added in the cart",
        description: "Now you can book your order from cart",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    });
  };

  return (
    <Box>
      <Navbar></Navbar>
      <Grid
        rowGap={5}
        columnGap={5}
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr ",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr",
          "2xl": "1fr 1fr 1fr",
        }}
      >
        {state.AllData?.map((el) => (
          <Box className={cardStyle.container}>
            <Box className={cardStyle.card}>
              <Box className={cardStyle.box}>
                <Box className={cardStyle.content}>
                  <Flex gap={5}>
                    <Box>
                      <img
                        width="100%"
                        height="fit-content"
                        src={el.img_url}
                        alt={el.model}
                      />
                    </Box>
                    <Box>
                      <Box>
                        <h4>
                          Brand:<strong> {el.brand}</strong>
                        </h4>
                        <h4>
                          Model: <strong>{el.model}</strong>
                        </h4>
                        <p my="5px">Weight : {el.weight_g} gm</p>

                        <p mt="10px">
                          {" "}
                          <strong>Price : {el.approx_price_EUR * 70}</strong>
                        </p>
                        <Button mt="20px" onClick={() => Addproduct(el._id)}>
                          Add to Cart
                        </Button>
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchResult;

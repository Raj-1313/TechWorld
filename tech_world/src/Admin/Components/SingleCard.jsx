import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import cardStyle from "./SingleCard.module.css";
import { adminProductDelete } from "../../Redux/AdminRedux/Admin_Action";
import { useDispatch, useSelector } from "react-redux";



const SingleCard = ({
  brand,
  model,
  img_url,
  _id,
  weight_g,
  approx_price_EUR,
}) => {
  const dispatch = useDispatch();
  const {isLoading,isError } = useSelector(store=> store.Admin_reducer)
  const productDelete = (id) => {
    dispatch(adminProductDelete(id));
  };


 


  return (
    <Box className={cardStyle.container}>
      <Box className={cardStyle.card}>
        <Box className={cardStyle.box}>
          <Box className={cardStyle.content}>
            <h4>
              Brand:<strong> {brand}</strong>
            </h4>
            <h4>
              Model: <strong>{model}</strong>
            </h4>
            <Flex py="10px" gap={5}>
              <img width="30%" height="fit-content" src={img_url} alt={model} />
              <Box>
                <p>Weight : {weight_g} gm</p>

                <p>
                  {" "}
                  <strong>Price : {approx_price_EUR * 70}</strong>
                </p>
              </Box>
            </Flex>
            <Flex gap={3} py="20px" justifyContent="space-around">
              <Button>Update</Button>
              <Button onClick={() => productDelete(_id)}>delete</Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleCard;
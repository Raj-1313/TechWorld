import { useDispatch, useSelector } from "react-redux";
import "./Data.css";
import { getdata } from "../../Redux/AppReducer/action";

import { Box, Flex, Img } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AddItem from "../../Redux/AddItemCart/action";

const Data = () => {
  const product = useSelector((store) => store.AppReducer.data);
  const { auth } = useSelector((store) => store.Auth_reducer);
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    dispatch(getdata());
  }, []);

  return (
    <Box
      classNameName="productbox"
      display="grid"
      gridTemplateColumns={{
        base: "repeat(2,1fr)",
        md: "repeat(3,1fr)",
        lg: "repeat(4,1fr)",
      }}
      w="full"
      m="auto"
      justifyContent="center"
      alignItems="center"
      gap="2"
    >
      {product &&
        product.map((productData) => {
          return ( <Box w={{base:"50vw",md:"30vw",lg:'20vw'}} className="wrapper">

  
            <div className="overviewInfo">
            <Flex justifyContent='space-between'>
            <Box>

<div className="grouptext">
   <h3>PLATFORM</h3>
   <p>PS5</p>
</div>
<div className="grouptext">
   <h3>RELEASE</h3>
   <p>{productData.announced}</p>
</div>
<div className="grouptext">
   <h3>PRICE</h3>
   <p>$50</p>
</div>
</Box>
                {/* cart       */}
              <Box  className="actions">
                <div className="backbutton ">
                </div>
                <Box className="cartbutton neurobutton" onClick={() => dispatch(AddItem(productData._id))}> 
           <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
              fill="currentColor"
            />
            <path
              d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
              fill="currentColor"
            />
            <path
              d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
              fill="currentColor"
            />
          </svg>
                </Box>
              </Box>
              </Flex>
                

              <div className="productinfo">
                <div className="productImage">
                  <Img opacity={0.9}  borderRadius={'12px'} src={productData.img_url} alt="product: ps5 controller image" />
                </div>
                
            </div>
               
          </div> 
           
            
            <Box  color= "white" className="productSpecifications">
              <h1> {productData.brand}</h1>
              <p> {productData.model} </p>
    
              
              <div classNameName="checkoutButton">
                <div className="priceTag">
                  <span>₹</span>{Math.ceil(productData.approx_price_EUR * 82.85)}
                </div>
                        </div>
            </Box>
          
            
          </Box>
        
          );
        })}
    </Box>
  );
};

export default Data;



import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import getData from '../../Redux/CartRedux/action';
import { Box, Grid, Flex, Image, Spacer, Text, Button } from "@chakra-ui/react"
import "../../styles/Cart.css"
import CartProduct from './CartProduct';
import PriceDetails from './PriceDetails';

const Cart = () => {
  const [count, setCount] = useState(0);
  const [totalprice, setTotalPrice] = useState(0);
  const data = useSelector((store) => store.CartReducer.data)
  const dispatch = useDispatch();
  console.log("data is", data)

  useEffect(() => {
    dispatch(getData());
    if (data.length) {
      setCount(data.length)
    }
    getTotal();
  }, [data.length])

  const getTotal = ()=>{
    if(data){
      let total = 0
      data.forEach((elem)=>{
        total += +elem.productID[0]?.approx_price_EUR*+elem.count*87.82
        console.log("count inside loop", elem.count,"price is", +elem.productID[0]?.approx_price_EUR)
      })
      console.log("total price is" ,Math.round(total))
      setTotalPrice(Math.round(total))
    }
  }

  return (
    <div className='body' >
      <Flex ml={["10px", "15px", "20px"]} >
        <Box mt="50px">
          {
            data.length > 0 && data.map((elem) =>
              <CartProduct key={elem._id} elem={elem} />
            )
          }
        </Box>
        <PriceDetails totalprice={totalprice} count={count} />
      </Flex>
    </div>
  )
}

export default Cart
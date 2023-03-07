import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import getData from '../../Redux/CartRedux/action';
import { Box,Button,Flex, Grid} from "@chakra-ui/react"
import cartClass from "../../styles/Cart.module.css"
import CartProduct from './CartProduct';
import PriceDetails from './PriceDetails';
import LargeWithLogoCentered from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Loading from "../../HOF/Loading";
import Error from "../../HOF/Error";
import { Empty} from 'antd';

const Cart = () => {
   const [count, setCount] = useState(0);
  const [totalprice, setTotalPrice] = useState(0);
  const {data,isLoading,isError} = useSelector((store) => store.CartReducer)
  const dispatch = useDispatch();
  // console.log("data is", data)



  useEffect(() => {
    dispatch(getData());
    if (data.length) {
      setCount(data.length)
    }
    getTotal();
  }, [data.length])



  const getTotal = ()=>{
    if(data.length>0){
      let total = 0
      data.forEach((elem)=>{
        total += +elem.productID[0]?.approx_price_EUR*+elem.count*87.82
        // console.log("count inside loop", elem.count,"price is", +elem.productID[0]?.approx_price_EUR)
      })
      // console.log("total price is" ,Math.round(total))
      setTotalPrice(Math.round(total))
    }
  }




  if(isLoading){
    return <Loading />
  }

  
  if(isError){
    return <Error/>
  }
  
if(data.length==undefined){
  return (
    <Box  h={'100vh'}>
    <Navbar/>
  <Grid h='80vh'   justifyContent='center' alignItems='center'>
  <Empty description='NO PRODUCT' />
  </Grid>
    </Box>
  )
}
  
  return (
    <>
    <Navbar/>
    <div className={cartClass.cartContainer} >
      <Flex ml={["10px", "15px", "20px"]} flexDirection={["column","row","row"]} >
        <Box w={["97%","100%","64%"]}mt="50px" className={cartClass.cartProducts} h={["46vh","60vh","100vh"]} >
          {
            data.length > 0 && data.map((elem,index) =>
              <CartProduct key={elem._id} elem={elem} />
            )
          }
        </Box>
          <PriceDetails totalprice={totalprice} count={count} />
      </Flex>
    </div>
    
    {/* <LargeWithLogoCentered/> */}
    </>
  )
}

export default Cart
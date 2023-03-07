import React, {  useEffect, useState } from 'react'
import { Box, Grid, Flex,  Spacer, Text, Button, Center } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { handleAddCoupon, handleAddCouponDis, handleTotalPrice } from '../../Redux/CartRedux/action'
import style from '../../styles/Cart.module.css'

const PriceDetails = ({ totalprice, count }) => {

    const {myDiscount,data} = useSelector((store) => store.CartReducer);
    const dispatch = useDispatch();
    const [coupon, setCoupon] = useState(false);
    const [discountedAmount, setDiscountdPrice] = useState(0);
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0 || myDiscount);

    
    const handleCoupon = () => {
        setCoupon(prev => prev ? prev = false : prev = true);
    }

    const handleCouponCode = () => {
         if (couponCode === "Tech30") {
            let dis = Math.floor(totalprice / 100 * 10)
            console.log(dis,'discount')
            localStorage.setItem("couponDiscount", dis)
            localStorage.setItem("couponCode", couponCode)
            dispatch(handleAddCouponDis(dis))
            dispatch(handleAddCoupon(couponCode))
            setCouponCode("")
            setCoupon(false)
        }
    }


useEffect(()=>{
    if(myDiscount!=undefined){
        setDiscountdPrice(myDiscount)
    }

},[myDiscount])

    return (
       
        <Box
            bgColor="white"
            ml={["0px", "35px", "50px"]}
            w={["97%", "400px", "400px"]}
            h="450px"
            border="1px solid #DBDDE0"
            p="20px"
            pt="10px"
        >
            <Text fontSize="20px" color="#959595" fontWeight="bold" fontFamily="revert" borderBottom="1px solid #DBDDE0" mb="20px" pb="10px" >Price Details</Text>
            <Grid gap="20px" fontSize="18px">
                <Flex >
                    <Text  >Price ({count} Items)</Text>
                    <Spacer />
                    <Text>₹{Intl.NumberFormat().format(totalprice)}</Text>
                </Flex>


                <Flex>
                    <Text>Discount</Text>
                    <button className={style.coupon} onClick={handleCoupon} >Apply Coupon</button>
                    <Spacer />
                    <Text>₹{discountedAmount}</Text>
                </Flex>
                {coupon &&
                    <Flex mt="-20px">
                        <input
                            className={style.couponInput}
                            type="text"
                            placeholder='Tech30'
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button  className={style.applyCode} onClick={handleCouponCode} >Apply</button>
                    </Flex>
                }
                <Flex>
                    <Text>Delevery Charges</Text>
                    <Spacer />
                    <Text>Free</Text>
                </Flex>
                <Flex>
                    <Text>Secured Packaging Fee</Text>
                    <Spacer />
                    <Text> ₹{new Intl.NumberFormat().format(count * 40 - 1)} </Text>
                </Flex>
                <Flex fontSize="20px" fontWeight="bold" borderTop="1px solid #DBDDE0" borderBottom="1px solid #DBDDE0" pt="10px" pb="10px" >
                    <Text  >Total Amount</Text>
                    <Spacer />
                    <Text>₹ {(totalprice + count * 40 - 1 - discountedAmount)}</Text>
                </Flex>
                <Text color="#388E3C" >You will save ₹{discountedAmount} on this order </Text>
                <Link to="/payment" >
                    <Button width="200px" display="block" m="auto" bgColor="blue.500" color="white" fontSize="20px" _hover={{ bgColor: "blue.300" }} 
                    onClick={()=>dispatch(handleTotalPrice(totalprice+count*40-1-discountedAmount))}
                    >Place Order</Button>
                </Link>
            </Grid>
        </Box>

    )
}
// {totalprice+count*40-1-discountedAmount}
export default PriceDetails
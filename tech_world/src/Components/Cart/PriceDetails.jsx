import React, { useState } from 'react'
import { Box, Grid, Flex,  Spacer, Text, Button } from "@chakra-ui/react"
import { Link} from "react-router-dom"

const couponDis = localStorage.getItem("couponDiscount")

const PriceDetails = ({ totalprice, count }) => {

    const [coupon,setCoupon] = useState(false);
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0 || couponDis);

    const handleCoupon = ()=>{
        setCoupon(prev=>prev?prev=false:prev=true);
    }

    const handleCouponCode = ()=>{
        if(couponCode === "ayush13"){
            let dis = Math.floor(totalprice/100*10)
            localStorage.setItem("couponDiscount", dis)
            localStorage.setItem("couponCode", couponCode)
            setCoupon(false)
        }else{

        }
    }
    // console.log(couponCode)
    console.log("total price is" ,totalprice,Math.floor(totalprice/100*10),typeof(+discount))


    return (
        <Box 
            bgColor="white" 
            ml={["0px", "35px", "50px"]} 
            w={["97%","400px","400px"]} 
            h="450px" 
            border="1px solid #DBDDE0" 
            p="20px" 
            pt="10px" 
            mt={["0px","50px","50px"]}
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
                    <button className='coupon' onClick={handleCoupon} >Apply Coupon</button>
                    <Spacer />
                    <Text>₹{Intl.NumberFormat().format(discount)}</Text>
                </Flex>
                {coupon &&
                    <Flex mt="-20px">
                        <input 
                            className='couponInput' 
                            type="text" 
                            placeholder='Type Coupon Code'
                            value={couponCode} 
                            onChange={(e)=>setCouponCode(e.target.value)}
                        />
                        <button className='applyCode' onClick={handleCouponCode} >Apply</button>
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
                    <Text  >Totel Amount</Text>
                    <Spacer />
                    <Text>₹ {Intl.NumberFormat().format(totalprice + count * 40 - 1 - discount)}</Text>
                </Flex>
                <Text color="#388E3C" >You will save ₹{Intl.NumberFormat().format(discount && discount - count * 40 - 1)} on this order </Text>
                <Link to="/payment" >
                    <Button width="200px" display="block" m="auto" bgColor="blue.500" color="white" fontSize="20px" _hover={{ bgColor: "blue.300" }} >Place Order</Button>
                                   </Link>
            </Grid>
        </Box>
    )
}

export default PriceDetails
import "./cartButton.css";
import { Box,  useToast } from "@chakra-ui/react";
import React, {  useState } from "react";
import AddItem from "../../Redux/AddItemCart/action";
import { useDispatch } from "react-redux";

const couponCode = localStorage.getItem("couponCode")
const couponDis = localStorage.getItem("couponDiscount")

const CartButton = ({id,discount}) => {
    const [coupon, setCoupon] = useState("" || couponCode);
    const [dis, setDis] = useState(0||+couponDis);
    const dispatch = useDispatch();
    const toast = useToast();

    const handleClick = ()=>{
        dispatch(AddItem({productID:id}))
        toast({
            title: 'Item added in the cart',
            description: "Now you can book your order from cart",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position:"top"
        })
        if(coupon==="ayush13"){
            setDis(dis+discount)
            setCoupon(prev=>prev+"Hello")
            // localStorage.setItem("couponDiscount", dis)
            console.log("discount in localStorage",dis, typeof(dis))
            console.log(dis,typeof(coupon),coupon,"sdhcbb")
            console.log(discount)
        }
        
    }
    


    return (
        <Box className="actions" mt="40px">
            <div className="backbutton ">
            </div>
            <Box className="cartbutton neurobutton" onClick={handleClick}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
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
    )
}

export default CartButton
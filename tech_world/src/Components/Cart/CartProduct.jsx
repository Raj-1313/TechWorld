import { Box, Grid, Flex, Image, Spacer, Text, But, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import AddItem from "../../Redux/AddItemCart/action";
import deleteItem from "../../Redux/DeleteItemCart/action";
import reduceItem from "../../Redux/ReduceItemCart/action";
import "../../styles/Cart.css"

const couponDis = localStorage.getItem("couponDiscount")

const CartProduct = ({ elem }) => {
    const dispatch = useDispatch();

    const today = new Date()
    const tomorrow = new Date(today)

    tomorrow.setDate(tomorrow.getDate() + 4)
    const tomorrowDate = tomorrow.toDateString()

    // console.log(tomorrowDate)

    const handleReduceItem = (id) => {
        dispatch(reduceItem({ productID: id }))
        let price = Math.round(elem.productID[0]?.approx_price_EUR * 87.82)
        price = Number(Math.floor(price / 100 * 10))
        localStorage.setItem("couponDiscount", +couponDis - price)
    }

    const handleAddItem = (id) => {
        dispatch(AddItem({ productID: id }))
        let price = Math.round(elem.productID[0]?.approx_price_EUR * 87.82)
        console.log(Math.floor(price / 100 * 10))
        price = Number(Math.floor(price / 100 * 10))
        localStorage.setItem("couponDiscount", +couponDis + price)
    }

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
        let price = Math.round(elem.productID[0]?.approx_price_EUR * 87.82 * elem.count / 100 * 10)
        console.log(price)
        localStorage.setItem("couponDiscount", +couponDis - Math.floor(Number(price)))
    }

    return (
        <Flex border="1px solid #DBDDE0" pt="20px" borderBottom="0px" pr="40px" bgColor="white" >
            <Grid border="1px solid black" justifyItems="center" alignItems="center" gap={["5px", "7px", "10px"]}>
                <Image ml={["0px", "", "40px"]} width={["60px", "80px", "100px"]} mr="2rem" src={elem.productID[0]?.img_url} />
                <Flex gap="10px" mt="20px" mb="20px">
                    <Button
                        disabled={elem.count === 1}
                        onClick={() => handleReduceItem(elem.productID[0]?._id)}
                        border="1px solid #C2C2C2"
                        fontSize="20px"
                        h="40px"
                        w="30px"
                        display="flex"
                        justify-content="center"
                        align-items="center"
                        borderRadius="50%"
                    >-</Button>
                    <Button>{elem.count}</Button>
                    <Button
                        onClick={() => handleAddItem(elem.productID[0]?._id)}
                        border="1px solid #C2C2C2"
                        fontSize="20px"
                        h="40px"
                        w="30px"
                        display="flex"
                        justify-content="center"
                        align-items="center"
                        borderRadius="50%"
                    >+</Button>
                </Flex>
            </Grid >
            <Box ml={["10px", "20px", "30px"]} border="1px solid black" width={["150px", "250px", "380px"]} >
                <Text fontSize={["12px", "14px", "16px"]} fontWeight={"bold"} >{elem.productID[0]?.model}</Text>
                <Text fontSize={["12px", "14px", "16px"]} color="#A28787" >{elem.productID[0]?.RAM}</Text>
                <Text fontSize={["12px", "14px", "16px"]} mt={["0px", "5px", "10px"]}>{elem.productID[0]?.brand}</Text>
                <Text fontSize={["10px", "12px", "14px"]} mt={["2px", "5px", "5px"]}>₹ {Intl.NumberFormat().format(Math.round(elem.productID[0]?.approx_price_EUR * 87.82 * elem.count))} </Text>
                <Text fontSize={["10px", "12px", "14px"]} color="#A28787" >{elem.productID[0]?.status}</Text>
                <Flex gap="10px" mt="30px" >
                    <Button
                        _hover={{ bg: "blue.500", color: " white" }}
                        fontSize={["10px", "16px", "18px"]}
                        width={["60px", "120px", "auto"]}
                        height={["20px", "35px", "40px"]}
                        mt={["-20px", "0px", "0px"]}
                        onClick={() => handleDelete(elem._id)}
                    >
                        REMOVE
                    </Button>
                </Flex>
            </Box>
            <Box border="1px solid black" width={["150px", "210px", "250px"]} >
                <Text textAlign="right" >Delivery by {tomorrowDate}</Text>
            </Box>
        </Flex >
    )
}

export default CartProduct
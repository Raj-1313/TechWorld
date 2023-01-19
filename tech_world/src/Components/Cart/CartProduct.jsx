import { Box, Grid, Flex, Image, Spacer, Text, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import AddItem from "../../Redux/AddItemCart/action";
import deleteItem from "../../Redux/DeleteItemCart/action";
import reduceItem from "../../Redux/ReduceItemCart/action";
import "../../styles/Cart.css"

const CartProduct = ({ elem }) => {
    const dispatch = useDispatch();

    const today = new Date()
    const tomorrow = new Date(today)

    tomorrow.setDate(tomorrow.getDate() + 4)
    const tomorrowDate = tomorrow.toDateString()

    console.log(tomorrowDate)

    const handleReduceItem = (id) => {
        dispatch(reduceItem({ productID: id }))
    }

    const handleAddItem = (id) => {
        dispatch(AddItem({ productID: id }))
    }

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    }

    return (
        <Flex border="1px solid #DBDDE0" pt="20px" borderBottom="0px" pr="40px" bgColor="white" >
            <Grid justifyItems="center" alignItems="center" gap="10px">
                <Image ml="40px" width={["60px","80px","100px"]} mr="2rem" src={elem.productID[0]?.img_url} />
                <Flex gap="10px" mt="20px" mb="20px">
                    <button className="minusItem" onClick={() => handleReduceItem(elem.productID[0]?._id)} >-</button>
                    <button className='counter' >{elem.count}</button>
                    <button className="minusItem" onClick={() => handleAddItem(elem.productID[0]?._id)}  >+</button>
                </Flex>
            </Grid>
            <Box ml="30px" >
                <Text fontSize="16px" fontWeight={"bold"} >{elem.productID[0]?.model}</Text>
                <Text fontSize="14px" color="#A28787" >{elem.productID[0]?.RAM}</Text>
                <Text fontSize="16px" mt="10px">{elem.productID[0]?.brand}</Text>
                <Text fontSize="14px" mt="5px">₹ {Intl.NumberFormat().format(Math.round(elem.productID[0]?.approx_price_EUR * 87.82 * elem.count)) } </Text>
                <Text fontSize="14px" color="#A28787" >{elem.productID[0]?.status}</Text>
                <Flex gap="10px" mt="30px" >
                    <Button _hover={{ bg: "blue.500", color: " white" }} width={"auto"} onClick={() => handleDelete(elem._id)} >REMOVE</Button>
                </Flex>
            </Box>
            <Box ml={["100px", "150px", "200px"]} >
                <Text>Delivery by {tomorrowDate}</Text>
            </Box>
        </Flex>
    )
}

export default CartProduct
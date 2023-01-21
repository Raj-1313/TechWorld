import { Box, Flex, Grid, Img,Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getdata } from '../../Redux/AppReducer/action';
import CartButton from './CartButton';
import "./cartButton.css"

const Products = () => {
    const product = useSelector((store) => store.AppReducer.data);
    const dispatch = useDispatch();
    console.log(product);

    useEffect(() => {
        dispatch(getdata());
    }, []);

    return (
        <Grid
            w="75%"
            m="auto"
            justifyContent="left"
            alignItems="center"
            className="productCon"
            h="100vh"
        >
            {
                product && product.map((elem) => {
                    return (
                        <Flex border="1px solid #DBDDE0" p="20px" key={elem._id} bgColor="white"  >
                            <Box >
                                <Img src={elem.img_url} />
                            </Box>
                            <Box ml="30px"  w="500px" >
                                <Text fontSize={["20px"]} fontWeight="bold" >{elem.model}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} color="#A28787" mb="10px" >{elem.RAM}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} >{elem.display_resolution}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} color="#A28787" >{elem.display_size}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} >Primary Camera {elem.primary_camera}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} >Front Camera {elem.secondary_camera}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} >{elem.battery}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} >{elem.colors}, Color </Text>
                            </Box>
                            <Flex w="320px" justifyContent="space-between" >
                                <Box>
                                    <Text fontSize={["22px"]} fontWeight="bold" >₹ {Intl.NumberFormat().format(Math.round(elem.approx_price_EUR * 87.82))} </Text>
                                    <Text as="s" color="#A28787" fontSize={["14px"]} >₹ {Intl.NumberFormat().format(Math.round(elem.approx_price_EUR*87.82 + elem.approx_price_EUR* 87.82/100*9))} </Text>
                                </Box>
                                <CartButton id={elem._id}/>
                            </Flex>
                        </Flex>
                    )
                })
            }
        </Grid>
    )
}

export default Products
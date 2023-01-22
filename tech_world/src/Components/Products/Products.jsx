import { Box, Flex, Grid, Img, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getdata } from '../../Redux/AppReducer/action';
import CartButton from './CartButton';
import "./cartButton.css"
import LikeButton from './LikeButton';

const Products = () => {
    const product = useSelector((store) => store.AppReducer.data);
    const dispatch = useDispatch();
    // console.log(product);
    const location = useLocation();
    const [searchParams] = useSearchParams();
    console.log(location)

    useEffect(() => {
        if(location || product.length){
            const sortBy = searchParams.get("sort")
            const getProductsParam = {
                params: {
                    brand: searchParams.getAll("brand"),
                    RAM: searchParams.getAll("RAM"),
                    sort: sortBy && "approx_price_EUR",
                    order: sortBy,
                }
            }
            console.log(getProductsParam)
            dispatch(getdata(getProductsParam));
        }
    }, [product.length,location.search]);

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
                            <Box ml="30px" w="500px" >
                                <Text fontSize={["20px"]} fontWeight="bold" >{elem.model} ({elem.brand})</Text>
                                <Text fontSize={["12px", "14px", "16px"]} color="#A28787" mb="10px" >{elem.RAM}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} >{elem.display_resolution}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} color="#A28787" >{elem.display_size}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} >Primary Camera {elem.primary_camera}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} >Front Camera {elem.secondary_camera}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} >{elem.battery}</Text>
                                <Text fontSize={["12px", "14px", "16px"]} >{elem.colors}, Color </Text>
                            </Box>
                            <Grid justifyContent="space-between" >
                                <Flex w="320px" justifyContent="space-between" >
                                    <Box>
                                        <Text fontSize={["22px"]} fontWeight="bold" >₹ {Intl.NumberFormat().format(Math.round(elem.approx_price_EUR * 87.82))} </Text>
                                        <Text as="s" color="#A28787" fontSize={["14px"]} >₹ {Intl.NumberFormat().format(Math.round(elem.approx_price_EUR * 87.82 + elem.approx_price_EUR * 87.82 / 100 * 9))} </Text>
                                    </Box>
                                </Flex>
                                <Flex Flex w="320px" justifyContent="right" mt="40px" alignItems="center" >
                                    <LikeButton/>
                                    <CartButton id={elem._id} discount={Math.floor(Number(elem.approx_price_EUR * 87.82 / 100 * 10))} />
                                </Flex>
                            </Grid>
                        </Flex>
                    )
                })
            }
        </Grid>
    )
}

export default Products
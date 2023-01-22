import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SingleProduct from '../Components/SingleProduct/SingleProduct'

const SingleProductPage = () => {
  return (
    <Box>
        <Navbar/>
        <SingleProduct />
    </Box>
  )
}

export default SingleProductPage
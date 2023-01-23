import { Flex } from '@chakra-ui/react'
import React from 'react'
import LargeWithLogoCentered from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Filter from './Filter'
import Products from './Products'

const AllProducts = () => {
  return (
    <>
    <Navbar />       
    <Flex
        bgColor="#F1F3F6"
    >
        <Filter/>
        <Products/>
    </Flex>
    <LargeWithLogoCentered/>
        </>
  )
}

export default AllProducts
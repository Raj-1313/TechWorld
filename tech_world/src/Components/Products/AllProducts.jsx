import { Flex } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter'
import Products from './Products'

const AllProducts = () => {
  return (
    <Flex
        pt="70px"
        bgColor="#F1F3F6"
    >
        <Filter/>
        <Products/>
    </Flex>
  )
}

export default AllProducts
import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminPaymentTracking } from '../../Redux/AdminRedux/Admin_Action'
import Chart from './dataStatas/Charts'

const ChartsStates = () => {
const dispatch =useDispatch()
const PayedData=useSelector((store)=>store.Admin_reducer.PayedData)


console.log(PayedData)
useEffect(()=>{
dispatch(adminPaymentTracking())
},[])


  return (
    <>
    <Flex>
<Box flex={2}>
<Text>Users</Text>
<Box>
{
 PayedData.length>0 && PayedData?.map((ele)=>
 
  <Card
   key={ele._id}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  w='sm'
  
>
  <Image
    objectFit='cover'
    maxW={{ base: '5px'}}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
   
  />
<CardBody w='sm'>

  <Flex justifyContent='space-between' alignItems='center'>
    <Box>
      <Heading size='md'>{ele.userID.name}</Heading>
      <Text py='2'>
       {ele.userID.category}
      </Text>
 
      <Text >
       TotalProduct: {ele.productDetails.length}
      </Text>
    </Box>

   
      <Button variant='solid' colorScheme='blue'>
        View Details
      </Button>
    
  </Flex>
</CardBody>
</Card>
        
  )
}
</Box>
</Box>
<Box >
      <Chart/>
</Box>
    </Flex>
    </>
  )
}

export default ChartsStates

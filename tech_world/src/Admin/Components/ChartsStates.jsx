import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text,Grid } from '@chakra-ui/react'

import React from 'react'
import { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminChartDataExtraction, adminPaymentTracking } from '../../Redux/AdminRedux/Admin_Action'
import Chart from './dataStatas/Charts'

const ChartsStates = () => {
const dispatch =useDispatch()
const {PayedData,dataExtractedForChart}=useSelector((store)=>store.Admin_reducer)
const [totalprice,setTotalPrice]= useState([])
const [dataExtracted,setDataExtracted]= useState([])

// console.log(dataExtractedForChart)

useEffect(()=>{
  dispatch(adminPaymentTracking())
  let x=PayedData?.map((el)=>el.productDetails.reduce((acc,ele)=> (acc+(ele.productID.approx_price_EUR*70)) ,0 ))
  setTotalPrice(x);
  let dataExtraction=PayedData?.map((el)=>el.productDetails.map((ele)=>{return{"name": ele.productID.model,"Total":ele.productID.approx_price_EUR} }))  
  setDataExtracted(dataExtraction)
  
},[dispatch,dataExtractedForChart])




  return (
    <>
 <Grid gridTemplateColumns={{base:"repeat(1fr)",lg:"repeat(2,1fr)"}} gap='5'mb='10'>
<Box flex={2}>
<Text>Users</Text>
<Box>

{
 PayedData.length>0 && PayedData?.map((ele,index)=>
 
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

    <Box>
  <Flex justifyContent='space-between' alignItems='center'>
    <Box>
      <Heading size='md'>{ele.userID.name}</Heading>
      <Text py='2'>
       {ele.userID.category}
      </Text>
    </Box>

      <Button variant='solid' colorScheme='blue' onClick={()=> dispatch(adminChartDataExtraction(dataExtracted[index]))}  >
        View Details
      </Button>
  </Flex>

 <Flex justifyContent='space-between' alignItems='center'>
      <Text  >
       Total Products:<br/> {ele.productDetails.length}
      </Text>
      <Text >
      Total: <br /> {totalprice[index]}
      </Text>
 </Flex>

   
    </Box>
    
</CardBody>
</Card>
        
  )
}
</Box>
</Box>
<Box >
      <Chart/>
</Box>
    </Grid>
    </>
  )
}

export default ChartsStates

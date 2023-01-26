import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Loading from "../../../HOF/Loading";
import Error from "../../../HOF/Error";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderStatusUpdate, TrackOrderData } from "../../../Redux/TrackOrder/TrackOrder_Action";

const ProjectTables = () => {
  const dispatch = useDispatch();
  const { OrderData ,isLoading,isError} = useSelector((state) => state.TrackOrder_reducer);

const colorState=(state)=>{
switch(state){
  case "completed":{
    return "#68D391"
  }
  case "out of delivery":{
    return "#ECC94B"
  }
  case "delivered":{
    return "#F6AD55"
  }
  case "pending":{
    return "#C53030"
  }
}
}


const delieveryManagement=(value,id)=>{
  console.log(value,id)
dispatch(OrderStatusUpdate(value,id)).then(()=>dispatch(TrackOrderData()))
}


  useEffect(() => {
    dispatch(TrackOrderData());
  }, [dispatch]);


  // if(isLoading){
  //   return <Loading />
  // }
  

  if(isError){
    return <Error/>
  }
  

  return (
    <Box
      m="auto"
      w={{ base: "95%", sm: "95%", md: "95%", lg: "100%" }}
      overflowX="scroll"
      scrollBehavior="auto"
    >
      <Card>
        <CardBody>
          <Heading sixe='2xl' textAlign='center'  mb='20px' tag="h5">ORDER TRACKING</Heading>
         
          <Table >
            <Thead>
              <Tr fontWeight='bold'>
                <Th>User Name</Th>
                <Th>Total Product</Th>
                <Th>Status</Th>
                <Th>Total Bill</Th>
              </Tr>
            </Thead>
     {isLoading? <Flex  justifyContent='center'  alignItems='center' ><Loading /></Flex>: <Tbody bg='blackAlpha.200'>
             { OrderData && OrderData.map((tdata, index) => (
                <Tr key={index} mb='20px'  border='2px solid lightgrey' >
                  <Td>
                    <Flex
                      flexDir="column"
                      gap={4}
                      fontFamily='fantasy'
                    >
                      <h1>
                        <b>Name:</b> {tdata.userID?.name}
                      </h1>
                      <h1>
                        <b>ID:</b> {tdata.userID?._id}
                      </h1>
                      <h1>
                        <b>E-mail:</b> {tdata.userID?.email}
                      </h1>
                    </Flex>
                  </Td>
                  <Td>
                    {tdata.productDetails?.map((product,ids) => (
                      <Box py="5px" key={ids}>
                        <Flex rowGap={5} columnGap={5}>
                          <Box>
                            <Image
                              h="100px"
                              w="fit-content"
                              src={product.productID?.img_url}
                            />
                          </Box>
                          <Box>
                            <h4 mb="4px">
                              <b>ProdID :</b> {product.productID?._id}
                            </h4>
                            <h4 mb="4px">
                              <b>Model :</b> {product.productID?.model}
                            </h4>
                            <Flex mt="5px" gap={2}>
                              <h4
                                style={{
                                  background: "black",
                                  padding: "5px",
                                  color: "#fff",
                                }}
                              >
                                Price :{" "}
                                {product.productID?.approx_price_EUR * 70}
                              </h4>
                              <button
                                style={{
                                  background: "black",
                                  padding: "5px",
                                  color: "#fff",
                                }}
                                mb="2px"
                              >
                                Quantity : {product.count}
                              </button>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                    ))}
                  </Td>
                  <Td >
                  <Select  placeholder='Select option' bg={colorState(tdata.orderStatus)} value={tdata.orderStatus} onChange={({target})=>delieveryManagement(target.value,tdata._id) }>
                   <option value='pending'>Pending</option>
                   <option value='out of delivery'>Out of Delivery</option>
                   <option value='delivered'>Delivered</option>
                   <option value='completed'>Completed</option>
                 </Select>


                  </Td>

                  <Td>
                    {tdata.productDetails?.reduce(
                      (acc, ele) =>
                        acc + ele.productID?.approx_price_EUR * 70 * ele.count,
                      0
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>}
          </Table>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ProjectTables;

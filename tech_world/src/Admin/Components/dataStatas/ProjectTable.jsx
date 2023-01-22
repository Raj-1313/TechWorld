import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { TrackOrderData } from "../../../Redux/TrackOrder/TrackOrder_Action";

const ProjectTables = () => {
  const dispatch = useDispatch();
  const { OrderData } = useSelector((state) => state.TrackOrder_reducer);

  useEffect(() => {
    dispatch(TrackOrderData());
  }, [dispatch]);

  return (
    <Box
      m="auto"
      w={{ base: "95%", sm: "95%", md: "95%", lg: "100%" }}
      overflowX="scroll"
      overflowY="scroll"
      scrollBehavior="auto"
    >
      <Card>
        <CardBody>
          <CardHeader tag="h5">Order Tracking</CardHeader>
          <CardFooter className="mb-2 text-muted" tag="h6">
            All Order's are listed here...
          </CardFooter>

          <Table responsive>
            <Thead>
              <Tr>
                <Th>User Name</Th>
                <Th>Total Product</Th>

                <Th>Status</Th>

                <Th>Total Bill</Th>
              </Tr>
            </Thead>
            <Tbody>
              {OrderData.map((tdata, index) => (
                <Tr key={index} className="border-top">
                  <Td>
                    <Flex
                      flexDir="column"
                      gap={4}
                      className="d-flex align-items-center p-2"
                    >
                      <h1>
                        <b>Name: {tdata.userID.name}</b>
                      </h1>
                      <h1>
                        <b>ID: {tdata.userID._id}</b>
                      </h1>
                      <h1>
                        <b>E-mail: {tdata.userID.email}</b>
                      </h1>
                    </Flex>
                  </Td>
                  <Td>
                    {tdata.productDetails.map((product) => (
                      <Box py="5px">
                        <Flex rowGap={5} columnGap={5}>
                          <Box>
                            <Image
                              h="100px"
                              w="fit-content"
                              src={product.productID.img_url}
                            />
                          </Box>
                          <Box>
                            <h4 mb="4px">
                              <b>ProdID :</b> {product.productID._id}
                            </h4>
                            <h4 mb="4px">
                              <b>Model :</b> {product.productID.model}
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
                                {product.productID.approx_price_EUR * 70}
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
                  <Td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </Td>

                  <Td>
                    {tdata.productDetails.reduce(
                      (acc, ele) =>
                        acc + ele.productID.approx_price_EUR * 70 * ele.count,
                      0
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ProjectTables;

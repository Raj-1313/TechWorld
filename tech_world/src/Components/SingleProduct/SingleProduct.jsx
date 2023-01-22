import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import AddItem from "../../Redux/AddItemCart/action";

export default function SingleProduct() {
  const toast= useToast()
  

  const [resData, setResData] = useState(null);
  const { id } = useParams();
const dispatch=useDispatch()

  const getData = async () => {
    let res = await axios.get(
      `https://fine-cyan-millipede-boot.cyclic.app/product/${id}`
    );
    setResData(res.data[0]);
  };

  const handleClick = (id)=>{
    dispatch(AddItem({productID:id})).then((res)=>{
     return toast({
        title: 'Item added in the cart',
        description: "Now you can book your order from cart",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position:"top"
      })  
      
    })
}




  useEffect(() => {
    getData();
  }, []);

  console.log("resData: ", resData);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={resData && resData.img_url}
            fit={"contain"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {resData && resData.model}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ₹{resData && +resData.approx_price_EUR * 88}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>{resData && resData.OS}</ListItem>
                  <ListItem>{resData && resData.RAM}</ListItem>{" "}
                  <ListItem>{resData && resData.Chipset}</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>{resData && resData.primary_camera}</ListItem>
                  <ListItem>{resData && resData.battery}</ListItem>
                  <ListItem>{resData && resData.internal_memory}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Processor:
                  </Text>{" "}
                  {resData && resData.CPU}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                  4G Bands:
                  </Text>{" "}
                  {resData && resData["4G_bands"]}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                  Chipset:
                  </Text>{" "}
                  {resData && resData.Chipset}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                  Internal Memory:
                  </Text>{" "}
                  {resData && resData.internal_memory}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Colors:
                  </Text>{" "}
                  {resData && resData.colors}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                  Display Resolution:
                  </Text>{" "}
                  {resData && resData.display_resolution}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                  Display Size:
                  </Text>{" "}
                  {resData && resData.display_size}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                  Display Type:
                  </Text>{" "}
                  {resData && resData.display_type}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                  Primary Camera:
                  </Text>{" "}
                  {resData && resData.primary_camera}{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                  Secondary Camera:
                  </Text>{" "}
                  {resData && resData.secondary_camera}{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                  Memory Card:
                  </Text>{" "}
                  {resData && resData.memory_card}{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                  Sensors:
                  </Text>{" "}
                  {resData && resData.sensors}{" "}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                  Network:
                  </Text>{" "}
                  {resData && resData.network_technology}{" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={()=>handleClick(id)}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

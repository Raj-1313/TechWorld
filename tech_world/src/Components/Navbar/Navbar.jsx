import React, {useState } from "react";
import {
  Text,
  Box,
  Flex,
  Image,
  Button,
  Menu,
  MenuButton,
  Hide,
  Show,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import Logo from "../../Assets/tech_world_logo.png";
import { BsFillCartCheckFill, BsFillPersonFill } from "react-icons/bs";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/LoginRedux/Login.Actions";
import {  HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineSearch, AiTwotoneHeart } from "react-icons/ai";
import searchProducts from "../../Redux/SearchRedux/Search.Actions";

const Navbar = () => {
  const [cartHover, setCartHover] = useState(false);
  const [accountHover, setAccountHover] = useState(false);
  const [query, setQuery] = useState("");
  const loginData = useSelector((store) => store.login.data);
  const dispatch = useDispatch();
  const searchData = useSelector((store) => store.search);

  const AllData = searchData.data;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
const {CartLength}= useSelector(store=>store.CartReducer)

// console.log(CartLength);
  const handleSearch = () => {
    dispatch(searchProducts(query));

    if (AllData.length > 0) {
      navigate("/searchresult", {
        state: {
          AllData,
        },
      });
    }
  };




  return (
    <>
      <Hide below="md">
        <Flex
          justify={"space-between"}
          align={"center"}
          width={"100%"}
          p={"0.6rem 1.5rem"}
          cursor={"pointer"}
          position={"sticky"}
          top={"0"}
          zIndex={"100"}
          backgroundColor={"white"}
        >
          <Box
            w={"13%"} 
          >
            <Link to={"/"}>
              <Image src={Logo} alt={"logo"} w={"100%"} h={"auto"} />
            </Link>
          </Box>

          <Flex
            w={"45%"}
            justify={"space-between"}
            align={"center"}
            fontWeight={500}
          >
            <Link to={"/products"}>
              <Text _hover={{ color: "#FF6900" }}>All Products</Text>
            </Link>
            <Text _hover={{ color: "#FF6900" }}>Smart Phones</Text>
            <Text _hover={{ color: "#FF6900" }}>Keypad Phones</Text>
            <Text _hover={{ color: "#FF6900" }}>Smart Watch</Text>
            <Text _hover={{ color: "#FF6900" }}>Tablets</Text>
          </Flex>

          {/* Search Input */}
          <Search />

          <Flex
            w={"5.5%"}
            justify={"space-around"}
            align={"center"}
            onMouseOver={() => setCartHover(true)}
            onMouseOut={() => setCartHover(false)}
            position={"relative"}
          >
            <BsFillCartCheckFill style={{ fontSize: "1.3rem" }} />
            <Text fontWeight={"500"}>CART</Text>
            {/* Cart Hover Message */}
            {cartHover && (
              <Box
                w={"280%"}
                position={"absolute"}
                top={"6"}
                borderRadius={"0.5rem"}
                backgroundColor={"white"}
                zIndex={"10"}
                boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
                fontSize={"0.8rem"}
                fontWeight={"bold"}
                p={"0.7rem"}
                onMouseOver={() => setCartHover(true)}
                onMouseOut={() => setCartHover(false)}
              >
                <Flex justify={"space-between"} w={"95%"}>
                  <Box>Order Summary</Box>
                  <Box>{CartLength} Item</Box>
                </Flex>
                <Box
                  textAlign={"center"}
                  mt={"1rem"}
                  color={"#FF6F61"}
                  _hover={{ color: "#FF6900" }}
                >
                  <Link to="/cart">PROCEED TO CART</Link>
                </Box>
              </Box>
            )}
          </Flex>

          <Flex
            w={"6.7%"}
            justify={"space-between"}
            align={"center"}
            position={"relative"}
            onMouseOver={() => setAccountHover(true)}
            onMouseOut={() => setAccountHover(false)}
          >
            <BsFillPersonFill style={{ fontSize: "1.3rem" }} />
            <Text fontWeight={"500"}>
              {loginData?.name?.substring(0, 6) || "Account"}
            </Text>
            {accountHover && (
              <Box
                minW={"107%"}
                position={"absolute"}
                p={"0.7rem"}
                backgroundColor={"white"}
                zIndex={"10"}
                top={"6"}
                fontSize={"0.95rem"}
                boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
                borderRadius={"0.3rem"}
                onMouseOver={() => setAccountHover(true)}
                onMouseOut={() => setAccountHover(false)}
              >
                <Box
                  pb={"0.5rem"}
                  borderBottom={loginData.category ? null : "0.5px solid gray"}
                  _hover={{ color: "#FF6900" }}
                  fontSize={"1rem"}
                >
                  {Object.keys(loginData).length ? (
                    <Button
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      Log Out
                    </Button>
                  ) : (
                    <Link to={"/signup"}>Sign Up</Link>
                  )}
                </Box>
                <Box _hover={{ color: "#FF6900" }}>
                  {Object.keys(loginData).length > 0 &&
                  loginData.category === "Admin" ? (
                    <Link to={"/admin"}>
                      <Button px={"1.5rem"}>Admin</Button>
                    </Link>
                  ) : loginData.category === "User" ? null : (
                    <Link to={"/login"}>Login</Link>
                  )}
                </Box>
              </Box>
            )}
          </Flex>
        </Flex>
      </Hide>

      {/* Responsive Navbar */}
      <Show below="md">
        <Flex
          w="100%"
          bg="white"
          p="1rem"
          color="white"
          align="center"
          justify="space-between"
        >
          <Flex w="100%" justify="space-between">
            <Flex
              w={"40%"}
              justify={"center"}
              align={"center"}
              display={{
                base: "none",
                sm: "none",
                md: "block",
                lg: "none",
                xl: "none",
                "2xl": "none",
              }}
            >
              <Image alt={"logo"} src={Logo} />
            </Flex>
            <Flex w={"20%"} mr={"0.5rem"} mt={"0.4rem"} justify={"center"} flexDirection={"column"} align={"center"}>
              <Box>
                <AiTwotoneHeart
                  color={"black"}
                  fontWeight={"bold"}
                  fontSize={"1.5rem"}
                />
              </Box>

              <Text
                color={"#16429E"}
                display={{
                  base: "none",
                  sm: "none",
                  md: "block",
                  lg: "none",
                  xl: "none",
                  "2xl": "none",
                }}
                fontWeight={500}
              >
                Wishlist
              </Text>
            </Flex>
            <Flex
              w="100%"
              backgroundColor={"#F1F4F6"}
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              align={"center"}
              justify={"center"}
              mt={"0.6rem"}
              p={0}
              h={"2.4rem"}
            >
              <Input
                placeholder="Search products"
                type="text"
                border={"none"}
                focusBorderColor="transparent"
                color={"black"}
                py={"10px"}
                fontSize={"0.9rem"}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <Button onClick={handleSearch}>
                <AiOutlineSearch
                  style={{ fontSize: "1.5rem", color: "black" }}
                />
              </Button>
            </Flex>

            <Flex
              mt={"0.4rem"}
              w={"20%"}
              justify={"center"}
              align={"center"}
              color={"black"}
            >
              <Link to={"/cart"}>
                <BsFillCartCheckFill fontSize={"1.4rem"} />
                <Text
                  display={{
                    base: "none",
                    sm: "none",
                    md: "block",
                    lg: "none",
                    xl: "none",
                    "2xl": "none",
                  }}
                  fontWeight={500}
                  color={"#16429E"}
                >
                  Cart
                </Text>
              </Link>
            </Flex>

            <Box pt="0.5rem" ml={"1rem"}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                  border="3px solid white"
                  bg="#257CFF"
                  _hover={{ bg: "#257CFF" }}
                  _expanded={{ bg: "#257CFF" }}
                  onClick={onOpen}
                />
              </Menu>
            </Box>
          </Flex>
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="white" color="black">
            <DrawerCloseButton />
            <DrawerHeader>
              <Box
                w="70%"
                ml="2.5rem"
                display="flex"
                justify="center"
                align="center"
              >
                <Link to="/">
                  <Image src={Logo} alt="WeFitLogo" />
                </Link>
              </Box>
            </DrawerHeader>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Link to={"/products"}>
                      <Box as="span" flex="1" textAlign="left">
                        All Products
                      </Box>
                    </Link>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Mobile Phones
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link to="/routines">IPhone</Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link to="/routines">Acer</Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link to="/routines">HTC</Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link to="/routines">Huawei</Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link to="/routines">Pixi 3</Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link to="/routines">Pop</Link>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Link to="/exercise">Keypad Mobiles</Link>
                      {/* "OT" model phones are keypad */}
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Link to="/exercise">Smart Watch</Link>
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Tablet
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <Flex justify={"center"} gap={6}>
                {Object.keys(loginData).length &&
                loginData.category === "Admin" ? (
                  <>
                    <Box>
                      <Link to={"/admin"}>
                        <Button
                          colorScheme="teal"
                          variant="solid"
                          _hover={{ color: "#2B6CB0" }}
                        >
                          Admin
                        </Button>
                      </Link>
                    </Box>
                    <Box>
                      <Button
                        colorScheme="red"
                        variant="solid"
                        onClick={() => dispatch(logout())}
                      >
                        Log Out
                      </Button>
                    </Box>
                  </>
                ) : Object.keys(loginData).length &&
                  loginData.category === "User" ? (
                  <>
                    <Box>
                      <Button
                        colorScheme="red"
                        variant="solid"
                        onClick={() => dispatch(logout())}
                      >
                        Log Out
                      </Button>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box>
                      <Link to={"/login"}>
                        <Button colorScheme="messenger" variant="solid">
                          Log In
                        </Button>
                      </Link>
                    </Box>
                    <Box>
                      <Link to={"/signup"}>
                        <Button colorScheme="telegram" variant="solid">
                          Sign Up
                        </Button>
                      </Link>
                    </Box>
                  </>
                )}
              </Flex>
            </Accordion>
          </DrawerContent>
        </Drawer>
      </Show>
    </>
  );
};

export default Navbar;
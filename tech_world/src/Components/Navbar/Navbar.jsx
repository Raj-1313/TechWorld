import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { navbarList } from "../../Data/NavbarListData";
import NavbarMinList from "./NavbarMinList";
import Logo from "../../Assets/tech_world_logo.png";
import { BsFillCartCheckFill, BsFillPersonFill } from "react-icons/bs";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/LoginRedux/Login.Actions";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo2 from "../../Assets/logo.png";

const Navbar = () => {
  const [cartHover, setCartHover] = useState(false);
  const [accountHover, setAccountHover] = useState(false);
  const loginData = useSelector((store) => store.login.data);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Hide below="sm">
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
            borderRadius={"0.5rem"}
            border={"0.5px solid #5C5C5C"}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <Link to={"/"}>
              <Image src={Logo} alt={"logo"} w={"100%"} h={"auto"} />
            </Link>
          </Box>

          {navbarList.map((item) => (
            
            <NavbarMinList key={item.id} {...item} />
            
          ))}

          {/* Search Input */}
          <Search />

          <Flex
            w={"5.5%"}
            justify={"space-around"}
            align={"center"}
            onMouseOver={() => setCartHover(true)}
            onMouseOut={() => setCartHover(false)}
            position={"relative"}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <BsFillCartCheckFill style={{ fontSize: "1.3rem" }} />
            <Text fontWeight={"600"}>CART</Text>
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
                  <Box>0 Item</Box>
                </Flex>
                <Box
                  textAlign={"center"}
                  mt={"1rem"}
                  color={"#FF6F61"}
                  _hover={{ color: "#FF6900" }}                  
                  >

                <Link to='/cart'>
                  PROCEED TO CART
                  </Link>
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
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <BsFillPersonFill style={{ fontSize: "1.3rem" }} />
            <Text fontWeight={"600"}>
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
                fontWeight={"bold"}
                boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
                borderRadius={"0.3rem"}
                onMouseOver={() => setAccountHover(true)}
                onMouseOut={() => setAccountHover(false)}
              >
                <Box
                  pb={"0.5rem"}
                  borderBottom={loginData.category ? null : "0.5px solid gray"}
                  _hover={{ color: "#FF6900" }}
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
                      <Button fontSize={"0.8rem"}>Admin</Button>
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
      <Show>
        <Show below="sm">
          <Flex
            w="100%"
            bg="white"
            p="1rem"
            color="white"
            align="center"
            justify="center"
          >
            <Flex
              w="80%"
              // border="1px solid white"
              justify="space-between"
            >
              <Box w="50%">
                <Link to="/">
                  <Image src={Logo} w="100%" alt="WeFitLogo" />
                </Link>
              </Box>

              <Box pt="0.5rem">
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
                      <Box as="span" flex="1" textAlign="left">
                        Get App
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <a
                      href="https://apps.apple.com/app/apple-store/id449810000"
                      target="_blank"
                    >
                      Workout App (iOS)
                    </a>
                  </AccordionPanel>
                  <AccordionPanel pb={4}>
                    <a
                      href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail"
                      target="_blank"
                    >
                      Workout App (Android)
                    </a>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Workout Plans
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link to="/routines">Pro-designed Plans</Link>
                  </AccordionPanel>
                  <AccordionPanel pb={4}>
                    <Link to="/routines"> Create My Plan</Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Link to="/exercise"> Exercise</Link>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Community
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link to="/community">Wefit Community</Link>
                  </AccordionPanel>
                  <AccordionPanel pb={4}>
                    <Link to="/blog">Blog</Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Link to="/coach"> Coach</Link>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Link to="/elite"> Elite</Link>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                <Flex justify={"center"} gap={6}>
                  {Object.keys(loginData).length ? (
                    <Link>
                      <Button onClick={() => dispatch(logout())}>Log Out</Button>
                    </Link>
                  ) : (
                    <>
                      <Box>
                        <Link to={"/login"}>
                          <Button>Log In</Button>
                        </Link>
                      </Box>
                      <Box>
                        <Link to={"/signup"}>
                          <Button>Sign Up</Button>
                        </Link>
                      </Box>
                    </>
                  )}
                </Flex>
                <Box>
                  {Object.keys(loginData).length > 0 &&
                    loginData.category === "Admin" && (
                      <Link to={"/admin"}>
                        <Button fontSize={"0.8rem"}>Admin</Button>
                      </Link>
                    )}
                </Box>
              </Accordion>
            </DrawerContent>
          </Drawer>
        </Show>
      </Show>
    </>
  );
};

export default Navbar;
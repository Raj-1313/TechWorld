import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Userstyle from "./SingleUser.module.css";
import { PhoneIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import {
  AllUserDelete,
  AllUserPatch,
} from "../../Redux/AllUsers/AllUsers.action";

const SingleUser = ({
  name,
  email,
  mobile,
  category,
  gender,
  _id,
}) => {
  const dispatch = useDispatch();

  const userDelete = (id) => {
   
    dispatch(AllUserDelete(id));
  };

  const handlePatch = (id) => {
    const payload = {
      category: category === "User" ? "Admin" : "User",
    };
    dispatch(AllUserPatch(id, payload));
  };

  return (
    <Box>
      <Box>
        <div className={Userstyle.card}>
          <img
            src={
              gender === "female"
                ? "https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
                : "https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no"
            }
            alt="Person"
            className={Userstyle.card__image}
          />

          <Center>
            <Box >
              <Flex>
                <p className={Userstyle.card__name}>Name : {name}</p>
                <Link
                  paddingLeft={10}
                  href={"tel:" + 91 + mobile}
                  target="_blank"
                >
                  <IconButton
                    aria-label="phone"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<PhoneIcon />}
                    _hover={{
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
              </Flex>
              <p className={Userstyle.card__name}>E-mail : {email}</p>
              <p className={Userstyle.card__name}>Gender : {gender}</p>
              <p className={Userstyle.card__name}>Category : {category}</p>
            </Box>
          </Center>

          <Flex m="auto" my={5} columnGap={3}>
            <Button
              _hover={{ bg: "gold", color: "black" }}
              bg="gold"
              color="black"
              className={Userstyle.card__name}
              onClick={() => handlePatch(_id)}
            >
              Make
              {category === "User" ? <span> Admin</span> : <span> User</span>}
            </Button>
            <Button
              bg="gold"
              color="black"
              className={Userstyle.card__name}
              _hover={{ bg: "gold", color: "black" }}
              onClick={() => userDelete(_id)}
            >
              Delete
            </Button>
          </Flex>
        </div>
      </Box>
    </Box>
  );
};

export default SingleUser;
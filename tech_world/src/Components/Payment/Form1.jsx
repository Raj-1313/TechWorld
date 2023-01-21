import React, { useState } from 'react';
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
} from '@chakra-ui/react';

const form1Data = {
    FName: "",
    LName: "",
    email: "",
}

const Form1 = () => {
    const [data, setData] = useState(form1Data);
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Payment Details
            </Heading>
            <Flex>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                        First name
                    </FormLabel>
                    <Input id="first-name" placeholder="First name" />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                        Last name
                    </FormLabel>
                    <Input id="last-name" placeholder="First name" />
                </FormControl>
            </Flex>
            <FormControl mt="2%">
                <FormLabel htmlFor="email" fontWeight={'normal'}>
                    Email address
                </FormLabel>
                <Input id="email" type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
        </>
    );
};

export default Form1;
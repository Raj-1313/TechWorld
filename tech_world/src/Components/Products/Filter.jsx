import { Box, Checkbox, Flex, Grid, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {getdata} from "../../Redux/AppReducer/action"

const brandCheckArr = ["Acer", "Realme", "Oppo", "Xiomi", "Vivo"]
const ramArr = [
    {
        name: "1 GB RAM",
        ram: "1 GB"
    },
    {
        name: "2 GB RAM",
        ram: "2 GB"
    },
    {
        name: "3 GB RAM",
        ram: "3 GB"
    },
    {
        name: "4 GB RAM",
        ram: "4 GB"
    },
    {
        name: "6 GB RAM",
        ram: "6 GB"
    },
    {
        name: "8 GB RAM",
        ram: "8 GB"
    },
    
]

const Filter = () => {
    const [brand, setBrand] = useState("")
    const [ram, setRam] = useState("");
    const [param, setParam] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log(e.target.checked, e.target.name)
        const { checked, name } = e.target
        if (checked) {
            setBrand(name);
            setParam({...param, brand:name})
        } else {
            setBrand("");
        }
        dispatch(getdata(param))
    }
    console.log(brand)
    console.log(param)

    const handleRam = (e)=>{
        console.log(e.target.checked, e.target.name)
        const { checked, name } = e.target
        if (checked) {
            setRam(name);
            setParam({...param, RAM:name})
        } else {
            setRam("");
        }
    }
    console.log(ram)

    return (
        <Box border="1px solid #DBDDE0" w="20%" p="20px" bgColor="white" ml="30px" >
            <Text borderBottom="2px solid grey" >Sort By</Text>
            <Grid gap="10px" mb="20px" mt="10px" justifyContent="left">
                <button>Price low-high</button>
                <button>Price high-low</button>
            </Grid>
            <Text borderBottom="2px solid grey" >BRAND</Text>
            <Box display="grid" pl="10px" mt="10px" >
                {
                    brandCheckArr.map((elem) => {
                        return <Flex gap="10px" key={elem}>
                            <Checkbox
                                onChange={handleChange}
                                name={elem}
                            />
                            <Text>{elem}</Text>
                        </Flex>
                    })
                }
            </Box>
            <Text borderBottom="2px solid grey" mt="20px" >RAM</Text>
            <Box display="grid" pl="10px" mt="10px" >
                {
                    ramArr.map((elem) => {
                        return <Flex gap="10px" key={elem.name}>
                            <Checkbox
                                onChange={handleRam}
                                name={elem.name}
                            />
                            <Text>{elem.ram}</Text>
                        </Flex>
                    })
                }
            </Box>
        </Box>
    )
}

export default Filter
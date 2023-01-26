import { Box, Checkbox, Flex, Radio, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const brandCheckArr = ["Acer", "Amazon", "Oppo", "BenQ", "Vivo","Dell","Coolpad","Gionee","HP","Blackberry"]
const ramArr = [
    {
        name: "1",
        ram: "1 GB"
    },
    {
        name: "2",
        ram: "2 GB"
    },
    {
        name: "3",
        ram: "3 GB"
    },
    {
        name: "4",
        ram: "4 GB"
    },
    {
        name: "6",
        ram: "6 GB"
    },
    {
        name: "8",
        ram: "8 GB"
    },

]

const Filter = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const intialCategories = searchParams.getAll("brand");
    const intialSort = searchParams.get("sort");
    const initialRam = searchParams.getAll("RAM")
    console.log("intial",intialCategories.includes("Xiomi"));
    // console.log(intialSort);

    const [category, setCategory] = useState(intialCategories || []);
    const [sort, setSort] = useState(intialSort || "");
    const [ram, setRam] = useState(initialRam || [])

    const handleBrands = (e) => {
        if(intialCategories.includes(e.target.value)){
            intialCategories.pop();
        }
            setCategory(e.target.value);
    };

    const handleRam = (e)=>{
      setRam(e.target.value);
    }


    const handleSort = (e) => {
        setSort(e.target.value);
    };

 

    useEffect(() => {
        let params = {};
        params.brand = category;
        params.RAM = ram;
        sort && (params.sort = sort);
        setSearchParams(params);
    }, [category,sort,ram]);

    return (
        <Box border="1px solid #DBDDE0" w="20%" p="20px" bgColor="white" ml="30px" >
            <Text borderBottom="2px solid grey" >Sort By</Text>
            <Box mb="20px" mt="10px" justifyContent="left" onChange={handleSort} >
                <Flex gap="10px">
                    <Checkbox
                        value="asc"
                        name="sortBy"
                        isChecked={intialSort === "asc"}
                    />
                    <label>A-Z</label>
                </Flex>
                <Flex gap="10px" >
                    <Checkbox
                        value="desc"
                        name="sortBy"
                        isChecked={intialSort === "desc"}
                    />
                    <label>Z-A</label>
                </Flex>
                <Flex gap="10px">
                    <Checkbox
                        value="inc"
                        name="sortBy"
                        isChecked={intialSort === "inc"}
                    />
                    <label>Price low-high</label>
                </Flex>
                <Flex gap="10px" >
                    <Checkbox
                        value="dec"
                        name="sortBy"
                        isChecked={intialSort === "dec"}
                    />
                    <label>Price high-low</label>
                </Flex>
            </Box>
            <Text borderBottom="2px solid grey" >BRAND</Text>
            <Box display="grid" pl="10px" mt="10px" >
                {
                    brandCheckArr?.map((elem) => {
                        return <Flex gap="10px" key={elem}>
                            <Checkbox
                                onChange={handleBrands}
                                name={elem}
                                value={elem}
                                isChecked={intialCategories.includes(elem)}
                            />
                            <Text>{elem}</Text>
                        </Flex>
                    })
                }
            </Box>
            <Text borderBottom="2px solid grey" mt="20px" >RAM</Text>
            <Box display="grid" pl="10px" mt="10px" >
                {
                    ramArr?.map((elem) => {
                        return <Flex gap="10px" key={elem.name}>
                            <Checkbox
                                onChange={handleRam}
                                name={elem.name}
                                value={elem.name}
                                isChecked={initialRam.includes(elem.name)}
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

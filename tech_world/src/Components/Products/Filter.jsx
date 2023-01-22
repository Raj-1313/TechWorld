import { Box, Checkbox, Flex, Grid, Input, Radio, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { useSearchParams } from 'react-router-dom'
import { getdata } from "../../Redux/AppReducer/action"

const brandCheckArr = ["Acer", "Realme", "Oppo", "Xiomi", "Vivo"]
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
    console.log("intial",intialCategories);
    // console.log(intialSort);

    const [category, setCategory] = useState(intialCategories || []);
    const [sort, setSort] = useState(intialSort || "");
    const [ram, setRam] = useState(initialRam || [])

    const handleBrands = (e) => {
        const newCategory = [...category];
        if (newCategory.includes(e.target.value)) {
            newCategory.splice(newCategory.indexOf(e.target.value), 1);
        } else {
            newCategory.push(e.target.value);
        }
        setCategory(newCategory);
    };

    const handleRam = (e)=>{
        const newRam = [...ram];
        if(newRam.includes(e.target.value)){
            newRam.splice(newRam.indexOf(e.target.value),1);
        }else{
            newRam.push(e.target.value);
        }
        setRam(newRam);
    }

    console.log(category);
    console.log(ram)

    const handleSort = (e) => {
        setSort(e.target.value);
    };

    console.log(sort)

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
                    <Radio
                        value="asc"
                        name="sortBy"
                        defaultChecked={sort === "asc"}
                    />
                    <label>Price low-high</label>
                </Flex>
                <Flex gap="10px" >
                    <Radio
                        value="desc"
                        name="sortBy"
                        defaultChecked={sort === "desc"}
                    />
                    <label>Price high-low</label>
                </Flex>
            </Box>
            <Text borderBottom="2px solid grey" >BRAND</Text>
            <Box display="grid" pl="10px" mt="10px" >
                {
                    brandCheckArr.map((elem) => {
                        return <Flex gap="10px" key={elem}>
                            <Checkbox
                                onChange={handleBrands}
                                name={elem}
                                value={elem}
                                checked={category.includes(elem)}
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
                                value={elem.name}
                                checked={ram.includes(elem.name)}
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









// const [brand, setBrand] = useState("")
//     const [ram, setRam] = useState("");
//     const [param, setParam] = useState({});
//     const dispatch = useDispatch();

//     const handleChange = (e) => {
//         console.log(e.target.checked, e.target.name)
//         const { checked, name } = e.target
//         if (checked) {
//             setBrand(name);
//             setParam({...param, brand:name})
//         } else {
//             setBrand("");
//         }
//         dispatch(getdata(param))
//     }
//     console.log(brand)
//     console.log(param)

//     const handleRam = (e)=>{
//         console.log(e.target.checked, e.target.name)
//         const { checked, name } = e.target
//         if (checked) {
//             setRam(name);
//             setParam({...param, RAM:name})
//         } else {
//             setRam("");
//         }
//     }
//     console.log(ram)

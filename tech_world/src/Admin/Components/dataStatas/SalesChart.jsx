// import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Card, CardBody, CardFooter, CardHeader, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const SalesChart = () => {
  let [countArr,setCountArr] = useState([])
  let [nameProd,setName] = useState([])

  const  getChartData=async()=>{
   let {data}=await  axios.get("http://localhost:8080/admin/mostvisted",{
      headers:{
        authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0"
      }
    })
    let {count,product}= data
    
    let bag=[]
    let bagCount=[]
    for(let i=0; i<product.length && product.length<15; i++){
      bag.push(product[i].productID[0].model)
      bagCount.push(count[i].productCount)      
    }
    setName(bag)
    setCountArr(bagCount)
  }

useEffect(()=>{
getChartData()
},[])
console.log(countArr,nameProd)

  const chartoptions = {
    series: [
      
      {
        name: "mobile",
        data: countArr ,
      }

    ],
    
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: nameProd
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <Text>Sales Summary</Text>
        <CardFooter  className="text-muted" tag="h6">
          Most Searched Product Report
        </CardFooter>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default SalesChart;

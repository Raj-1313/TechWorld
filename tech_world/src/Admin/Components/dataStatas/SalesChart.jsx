// import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Card, CardBody, CardFooter,  Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";


const SalesChart = () => {
  let [countArr,setCountArr] = useState([])
  let [nameProd,setName] = useState([])
  const token= JSON.parse(localStorage.getItem("loginData"))
  
  const  getChartData=async()=>{
   let {data}=await  axios.get("https://fine-cyan-millipede-boot.cyclic.app/admin/mostvisted",{
      headers:{
        authorization:token.token
      }
    })
    let {count,product}= data
    
    let bag=[]
    let bagCount=[]
    for(let i=0; i<product.length && product.length<15; i++){
      // console.log(product[i].productID[0],"this is us")
      if(product[i].productID[0]?.model!==undefined){
        bag.push(product[i].productID[0]?.model)
        bagCount.push(count[i].productCount)      
      }

    }
    setName(bag)
    setCountArr(bagCount)
  }



useEffect(()=>{
getChartData()
},[])


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
    <Card w='full'>
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
        >          
        </Chart>


      </CardBody>
    </Card>
  );
};

export default SalesChart;

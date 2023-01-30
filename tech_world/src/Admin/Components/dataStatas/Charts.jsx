import { 
  ResponsiveContainer, 
  BarChart,
  XAxis,
  YAxis,
} from "recharts";
import {  useSelector } from 'react-redux'
import { memo, useState } from "react";
import { Bar } from "recharts";
import { useEffect } from "react";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Chart = ({title }) => {

  const {dataExtractedForChart}=useSelector((store)=>store.Admin_reducer)
const [saleData,setSalesData]= useState(data)
console.log(saleData);

useEffect(() => {
  setSalesData(dataExtractedForChart)
},[dataExtractedForChart])

  return (
    <>
    {/* <Box zIndex={-1} className="chart" border='.4px solid lightgrey' w='full' h='full'> */}
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={saleData}>
          <Bar dataKey="Total" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis dataKey="Total" />
        </BarChart>
      </ResponsiveContainer>
    {/* // </Box> */}
    </>
  );
};

export default memo(Chart);

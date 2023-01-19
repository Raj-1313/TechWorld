import { Routes,Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";


const AllRoute = () => {
  return (
    <div>
      <Routes>
<Route path="/" element={<HomePage/>} />

      </Routes>
    </div>
  )
}

export default AllRoute

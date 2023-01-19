import { Routes,Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Admin from "../Admin/Pages/Admin";


const AllRoute = () => {
  return (
    <div>
      <Routes>
<Route path="/" element={<HomePage/>} />
<Route path="/admin" element={<Admin/>} />

      </Routes>
    </div>
  )
}

export default AllRoute

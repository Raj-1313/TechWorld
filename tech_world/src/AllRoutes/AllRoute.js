import { Routes,Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Admin from "../Admin/Pages/Admin";
import AllData from "../Components/Component.rek/Alldata";


const AllRoute = () => {
  return (
    <div>
      <Routes>
<Route path="/" element={<HomePage/>} />
<Route path="/admin" element={<Admin/>} />

<Route path="/alldata" element={<AllData/>} />

      </Routes>
    </div>
  )
}

export default AllRoute

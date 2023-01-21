import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Admin from "../Admin/Pages/Admin";
import SingleUser from "../Admin/Components/SingleUser";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ProjectTables from "../Admin/Components/dataStatas/ProjectTable";
import SalesChart from "../Admin/Components/dataStatas/SalesChart";
import Payment from "../Components/Payment/Payment";
import RazorPay from "../Components/Payment/RazorPay";

import Cart from "../Components/Cart/Cart"
import AllData from "../Components/Component.rek/Alldata";
import PageNotFound from "../HOF/notFoundPage";
import Loading from "../HOF/Loading";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<SingleUser />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin" element={<Admin />} />       

        <Route path="/ordering" element={<ProjectTables/>} />
        <Route path="/sales" element={<SalesChart/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/razor" element={<RazorPay/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<AllData/>} />
        <Route path="*" element={<PageNotFound/>} />

        <Route path="/loading" element={<Loading/>} />
      </Routes>
    </div>
  );
};

export default AllRoute;

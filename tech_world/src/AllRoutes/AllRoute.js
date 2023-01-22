import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Admin from "../Admin/Pages/Admin";
import SingleUser from "../Admin/Components/SingleUser";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Payment from "../Components/Payment/Payment";
import RazorPay from "../Components/Payment/RazorPay";
import Cart from "../Components/Cart/Cart"
import AllProducts from "../Components/Products/AllProducts"
import PageNotFound from "../HOF/notFoundPage";
import SingleProductPage from "../Pages/SingleProductPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<SingleUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />           
        <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>} />
        <Route path="/razor" element={<PrivateRoute><RazorPay/></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
        <Route path="/products" element={<AllProducts/>}/>
        <Route path="/product/:id" element={<SingleProductPage/>} />
        <Route path="*" element={<PageNotFound/>} />
       
      </Routes>
    </div>
  );
};

export default AllRoute;

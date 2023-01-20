import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Admin from "../Admin/Pages/Admin";
import SingleUser from "../Admin/Components/SingleUser";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<SingleUser />} />
      </Routes>
    </div>
  );
};

export default AllRoute;

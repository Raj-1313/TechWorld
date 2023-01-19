import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Admin from "../Admin/Pages/Admin";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ProjectTables from "../Admin/Components/dataStatas/ProjectTable";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin/>} />        
        <Route path="/ordering" element={<ProjectTables/>} />
      </Routes>
    </div>
  );
};

export default AllRoute;

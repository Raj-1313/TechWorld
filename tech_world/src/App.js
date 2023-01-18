import "./App.css";
import { Routes, Route, Link, Form } from "react-router-dom";
import SimpleSidebar from "./Admin/Pages/Admin";
import Dashboard from "./Admin/Components/Dashboard";
import AddForm from "./Admin/Components/Form";
import Admin from "./Admin/Pages/Admin.jsx";
import SingleCard from "./Admin/Components/SingleCard";
import AllProduct from "./Admin/Components/AllProduct";
function App() {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/allproduct" element={<AllProduct />} />
        {/* <Route path="/admin/addproduct" element={<AddForm />} /> */}
        <Route path="/card" element={<SingleCard />} />
        {/* <Route path="/allproduct" element={<AllProduct />} /> */}
        {/* <Route path="/" element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;

// className="App-header"

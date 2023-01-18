import "./App.css";
import { Routes, Route, Link, Form } from "react-router-dom";
import SimpleSidebar from "./Admin/Pages/Admin";
import Dashboard from "./Admin/Components/Dashboard";
import AddForm from "./Admin/Components/Form";
import Admin from "./Admin/Pages/Admin.jsx";
import AllData from "./Components/Component.rek/Alldata";
import Singleproduct from "./Components/Component.rek/Singleproduct";
function App() {
  return (
    <div>
      {/* <AllData/> */}
      {/* <h1>Hello World</h1> */}
      <Routes>
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/products/:id" element={<Singleproduct/>} /> */}
        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/admin/addproduct" element={<AddForm />} /> */}
        {/* <Route path="/" element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;

// className="App-header"

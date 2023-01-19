import "./App.css";
import { Routes, Route, Link, Form } from "react-router-dom";
import SimpleSidebar from "./Admin/Pages/Admin";
import Dashboard from "./Admin/Components/Dashboard";
import AddForm from "./Admin/Components/Form";
import Admin from "./Admin/Pages/Admin.jsx";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Routes>
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/admin/addproduct" element={<AddForm />} /> */}
        {/* <Route path="/" element={< />} /> */}
        <Route path="/cart" element={<Cart/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;

// className="App-header"

import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import BookingCar from "./Pages/BookingCar";
import 'antd/dist/antd.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path='/booking/:carid' exact component={BookingCar} /> 
      </Routes>
    </div>
  );
}

export default App;


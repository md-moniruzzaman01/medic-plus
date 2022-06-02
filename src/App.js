import Home from "./Components/Page/Home/Home";
import Navbar from "./Components/SharedSection/Navbar";
import Footer from "./Components/SharedSection/Footer";
import "aos/dist/aos.css"
import { Route, Routes } from "react-router-dom";
import Doctors from "./Components/Page/doctors/Doctors";
import Appointment from "./Components/Page/appoinment/Appointment";
import Login from "./Components/Page/Login/Login";
import Signup from "./Components/Page/Login/Signup";
import ContactUs from "./Components/Page/contact us/ContactUs";
import About from "./Components/Page/About/About";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/appointment" element={<Appointment/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/doctors" element={<Doctors></Doctors>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
       
      </Routes>
     
  <Footer></Footer>
    </div>
  );
}

export default App;

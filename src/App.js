import Home from "./Components/Page/Home/Home";
import Navbar from "./Components/SharedSection/Navbar";
import "aos/dist/aos.css"
import Footer from "./Components/SharedSection/Footer";
import { Route, Routes } from "react-router-dom";
import Doctors from "./Components/Page/doctors/Doctors";
import Appoinment from "./Components/Page/doctors/Doctors";
import Appointment from "./Components/Page/appoinment/Appointment";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/appointment" element={<Appointment/>}></Route>
        <Route path="/doctors" element={<Doctors></Doctors>}></Route>
      </Routes>
     
     <Footer></Footer>
    </div>
  );
}

export default App;

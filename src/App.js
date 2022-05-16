import Home from "./Components/Page/Home/Home";
import Navbar from "./Components/SharedSection/Navbar";
import "aos/dist/aos.css"
import Footer from "./Components/SharedSection/Footer";

function App() {
  return (
    <div >
      <Navbar></Navbar>
     <Home></Home>
     <Footer></Footer>
    </div>
  );
}

export default App;

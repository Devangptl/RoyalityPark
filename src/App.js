import { Route , Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Images from "./pages/Images";
import VideosPage from "./pages/VideosPage";
import Illustration from "./components/Illustration";
import VectorPage from "./pages/VectorPage";
import IllustrationPage from "./pages/IllustrationPage";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="bg-[#161616]" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/images" element={<Images/>} />
        <Route path="/videos" element={<VideosPage/>} />
        <Route path="/illustration" element={<IllustrationPage/>} />
        <Route path="/vector" element={<VectorPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

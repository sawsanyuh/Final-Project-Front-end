import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pages from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Home/Landing";
import Signin from "./components/pages/Signin/Signin";
import Login from "./components/pages/Login/Login";
import AboutDisplay from "./components/pages/About/AboutDisplay";
import BlogDisplay from "./components/pages/Blog/BlogDisplay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutDisplay />} />
        <Route path="/blog" element={<BlogDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
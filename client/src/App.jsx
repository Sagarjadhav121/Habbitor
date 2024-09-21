import Headear from "./layouts/Headear";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className=" h-svh bg-blend-screen">
      <BrowserRouter>
        <Headear />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

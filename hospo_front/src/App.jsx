import { Navigate, Route, Routes } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={localStorage.getItem("user") ? <Home/> : <Navigate to="/auth"/>} />
    <Route path="/auth" element={<Auth/>}/>
      </Routes>
  );
};

export default App;

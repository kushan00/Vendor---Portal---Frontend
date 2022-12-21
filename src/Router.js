import { useContext , useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/layouts/LandingPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const SiteRouter = () => {

  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
		    </Router>
    </div>
  );
}

export default SiteRouter;

import { useContext , useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Login from "./components/auth/Login";
import Navbar from "./components/layouts/NavBar";
import ProductAdd from "./components/product/ProductAdd";
import ProductHome from "./components/product/ProductsHome";
import SearchProduct from "./components/product/SearchProduct";
import { selectToken } from "./Redux/AuthSlice";

const SiteRouter = () => {

  const token = useSelector(selectToken);
  console.log("Logged User token",token);

  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={token == null ? <Login/> : <ProductHome/>}/>
                <Route path="/product-add" element={<ProductAdd/>}/>
                <Route path="/Home" element={<ProductHome/>}/>
                <Route path="/search/:id" element={<SearchProduct/>}/>
             </Routes>
		    </Router>
    </div>
  );
}

export default SiteRouter;

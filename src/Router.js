import { useContext , useEffect , useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Login from "./components/auth/Login";
import Navbar from "./components/layouts/NavBar";
import EditProduct from "./components/product/EditProduct";
import ProductAdd from "./components/product/ProductAdd";
import ProductHome from "./components/product/ProductsHome";
import SearchProduct from "./components/product/SearchProduct";
import { selectToken } from "./Redux/AuthSlice";

const SiteRouter = () => {

  const Token1 = useSelector(selectToken);
  console.log("Logged User token",Token1);
  const [token, settoken] = useState(null);

  useEffect(() => {
    var token2 =  localStorage.getItem("token");
    if(Token1 == null)
    {
      if(token2 == null)
      {
        settoken(null);
      }
      else
      {
        settoken(token2);
      }
    }
    else
    {
      settoken(Token1);
    }
  }, [])

  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={token == null ? <Login/> : <ProductHome/>}/>
                <Route path="/product-add" element={<ProductAdd/>}/>
                <Route path="/Home" element={<ProductHome/>}/>
                <Route path="/search/:id" element={<SearchProduct/>}/>
                <Route path="/update/:id" element={<EditProduct/>}/>
             </Routes>
		    </Router>
    </div>
  );
}

export default SiteRouter;

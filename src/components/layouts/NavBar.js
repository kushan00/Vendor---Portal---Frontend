import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate , Link} from "react-router-dom";
import { Label , Button, Row, Col } from "reactstrap";
import { logout, selectToken } from "../../Redux/AuthSlice";

const Navbar = ()=>{

    const navigate = useNavigate();

    //const [ Token,setToken ] = useState(localStorage.getItem("token"));
    const [ User,setUser ] = useState(localStorage.getItem("user"));

    const Token = useSelector(selectToken);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        console.log("executed logout");
        // localStorage.removeItem("token");
        // localStorage.removeItem("userRole");
        // localStorage.removeItem("user");
        // localStorage.removeItem("userID");
        // window.location.reload();
        dispatch(logout());
        //navigate("/");
      }

    return(
        <>
        <div>
          <div className="topnav-right">
                <Row style={{float:"right" , margin:"20px"}}>
                    <Col style={{marginTop:"20px"}}>
                        <b style={{fontSize:"15px" , display: Token == undefined ? "none" : "flex"}}>{User}</b>
                    </Col>
                    <Col>
                        <i 
                        className="fa-solid fa-circle text-right" 
                        style={{float:"right",display: Token == undefined ? "none" : "flex" ,fontSize:"60px" , color:"#001EB9"}}
                        >
                        </i>  
                        <button onClick={()=>handleSubmit()}>logout</button>
                    </Col>                   
                </Row>            
          </div>
          <br/><br/><br/><br/>
        </div>
        </>
    );
}

export default Navbar;
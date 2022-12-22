import React ,{useState,useEffect} from 'react';
import { GetAllProductDetails } from '../../services/ProductServices';
import DataTable from "react-data-table-component";
import {
   Badge,
   Card,
   CardHeader,
   CardTitle,
   CardBody,
   Label,
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   Input,
   Form,
   Row,
   Col
} from "reactstrap";
import moment from 'moment';
import image from "../../assets/images/1671715940637-Screenshot (1).png";
import { useNavigate , Link} from "react-router-dom";

const ProductHome = () => {

 const navigate = useNavigate();

 const [loading, setLoading] = useState(false);
 const [products, setproducts] = useState([]);
 const [searchTextItem, setsearchTextItem] = useState("");

 const handleSearch=(e)=>{
    console.log(e.target.value);
    setsearchTextItem(e.target.value);
 }

 const getAllproducts = async () => {
    setLoading(true);
    const data = await GetAllProductDetails();
    console.log("data",data);
    setproducts(data?.data?.data?.data)
    setLoading(false);
 }

 const searchItem =()=>{
    console.log(searchTextItem);
    navigate("/search/"+ searchTextItem);
 }

 useEffect(()=>{
    getAllproducts();
 },[])

 
 const columns = [
   {
       name: (<Badge color='white' style={{ fontSize: "18px",color:"#001EB9" }} >SKU</Badge>),
       selector: "SKU",
       cell: (data) => (
           <div style={{ display: "flex", flexDirection: "column" }}>
               <Label style={{ fontSize: "18px" }}><b>{data?.SKU}</b><br /></Label>
           </div>
       ),
   },
   {
      name: (<Badge color='white' style={{ fontSize: "18px",color:"#001EB9" }} >IMAGE</Badge>),
      selector: "SKU",
      cell: (data) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={image} style={{width:"30%" , height:"30%" , margin:"5px"}} />              
          </div>
      ),
   },
   {
       name: (<Badge color='white' style={{ fontSize: "18px",color:"#001EB9" }} >Product Name</Badge>),
       selector: "productName",
       cell: (data) => (
           <div style={{ display: "flex", flexDirection: "column" }}>
               <Label style={{ fontSize: "18px"}}><b>{data?.productName}</b><br /></Label>
           </div>
       ),
   },
   {
       name: (<Badge color='white' style={{ fontSize: "18px",color:"#001EB9" }} >Price</Badge>),
       selector: "price",
       cell: (data) => (
           <div style={{ display: "flex", flexDirection: "column" }}>
               <Label style={{ fontSize: "18px" }}><b>{data?.price}</b><br /></Label>
           </div>
       ),
   },
   {     
       cell: (data) => (

           <div className="row">
               <div className="col">
                   <a onClick={() => {}}><i class="fa-solid fa-trash" style={{ fontSize: "20px",color:"#001EB9" }}></i></a> 
               </div>               
               &nbsp;&nbsp;&nbsp;&nbsp;
               <div className="col">
               <a onClick={(e)=>{}}><i class="fa-sharp fa-solid fa-pen" style={{ fontSize: "20px",color:"#001EB9" }}></i></a>
               </div>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <div className="col">
               <a onClick={(e)=>{}}><i class="fa-regular fa-star" style={{ fontSize: "20px",color:"#001EB9" }}></i> <i class="fa-solid fa-star" style={{ fontSize: "20px",color:"#001EB9" }}></i></a>
               </div>
           </div>
 
       ),
     },

];

  return (
    <>
        <h1 style={{marginLeft:"10px"}}>PRODUCTS</h1>
        <br/><br/>
        <Row style={{marginLeft:"1px"}}>
            <Col >
            <div style={{
                        borderRadius: '30px',
                        border: '1px solid #ccc',
                        padding: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        flex: 1,
                        backgroundColor:"#F7F7F7",
                        width:"500px",
                        //height:"50px"
                    }}>
                <input
                    type="text"
                    placeholder="Search For Products"
                    style={{
                        backgroundColor:"#F7F7F7",
                        borderRadius: '30px',
                        border: '0px',
                        padding: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        flex: 1,

                    }}
                    name="search"
                    value={searchTextItem}
                    onChange={(e)=>handleSearch(e)}
                    />                        
                    <button                    
                    type="submit"
                    style={{
                        float:"right",
                        backgroundColor:"#001EB9",
                        borderRadius: '30px',
                        border: '30px',
                        color: '#666',
                        padding: '8px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        width:"180px"
                    }}
                    onClick={()=>{searchItem()}}
                    >                    
                    <span style={{color:'white' , marginLeft:"10px", marginRight:"10px"}}> <i class="fa-sharp fa-solid fa-magnifying-glass"></i> Search</span>
                    </button>  
            </div>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
                <a href="/product-add" className='btn btn-light' style={{backgroundColor:"#001EB9"}}>
                        <span style={{color:'white' , marginLeft:"20px", marginRight:"20px"}}>New Product</span>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="/fav" className='btn btn-light' style={{backgroundColor:"#FFFFFF",borderColor:"#001EB9"}}>
                        <i class="fa-solid fa-star" style={{ fontSize: "20px",color:"#001EB9" }}></i>
                </a>
            </Col>
        </Row>
        <br/><br/>
        <DataTable
            data={products}
            columns={columns}
            progressPending={loading}
         />
    </>
  );
}

export default ProductHome;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  Col,
  CardImg,
  Container,
  CardText,
} from "reactstrap";
import moment from "moment/moment";
import axios from "axios";
import { AddNewProduct } from "../../services/ProductServices";

const ProductAdd = () => {

const [image, setImage] = useState([]);
const [SKU, setSKU] = useState('#CA01');
const [quantity, setquantity] = useState('10');
const [productName, setproductName] = useState('product1');
const [productDescription, setproductDescription] = useState('no description');

console.log(image)

const handleSubmit = async () => {

  let formData = new FormData()
  formData.append('SKU', SKU);
  formData.append('quantity', quantity);
  formData.append('productName', productName);
  formData.append('productDescription', productDescription);
  Array.from(image).forEach(item => {
    formData.append('products', item)
  });
  console.log("sending data set ",formData);
  await AddNewProduct(formData).then(result => {
    console.log("result",result)
    if(result.data.status === 1)
    {
      alert('Product Added Successfully');
      window.location.reload();
    }
    else
    {
      alert('Product Not Added');
      window.location.reload();
    }
  }).catch(err => {
    console.log(err)
  })
}

  return (
    <div style={{margin:"100px"}}>
     
     {
        Array.from(image).map((item,index) => {
          return (
            <span>
              <img 
                key={index}
                style={{ padding: '10px' }}
                width={150} height={100}
                src={item ? URL.createObjectURL(item) : null} />
            </span>
          )
        })
      }

      <Input
        onChange={(e) => {
          setImage(e.target.files)
        }}
        multiple
        type="file"
      />
      <br/>
      <Button className="btn btn-success" onClick={handleSubmit}> SUBMIT</Button>


    </div>
  );
};

export default ProductAdd;

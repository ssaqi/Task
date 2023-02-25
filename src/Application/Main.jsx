import React from 'react'
import './Mix.css'
import Button from '@mui/material/Button';
import Header from '../Application/Header';
import Footer from './Footer'
import Slider from './Slider';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../feature/cartSlice";
import Shop from './Shop';
function Main() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();
  return (
    <>
<Header />
<Slider/>
<Shop/>
    <div className='container'>
        <br/><br/>
     <h3>Products</h3>
     <br/>
     {items.map((item) => (
     <div className="card mb-3">

  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.img}  className="img-fluid rounded-start img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title} </h5>
        <p className="card-text">
          {item.decription}
          <br/>
          Price : PKR {item.price}
        </p>
        <p className="card-text">
        <Button variant="contained" onClick={() => dispatch(addToCart(item))}>Add to cart</Button>
        </p>
      </div>
    </div>
  </div>
 
</div>
))}
</div>
<Footer/>

    </>
  )
}

export default Main
import React from 'react'
import './Mix.css'
import HouseIcon from '@mui/icons-material/House';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

import { getCartTotal } from "../feature/cartSlice";
function Footer() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
    <br/><br/>
    <div className='container-fluid' style={{backgroundColor: "#fff"}} >
    <div className='footer'>
    <div> 
      <HouseIcon style={{marginLeft:"20%",color:"green"}}/>
    <p style={{fontSize: "13px", fontWeight:"700"}}><Link to="/details" style={{textDecoration:"none",color:"#000"}}>HOME</Link></p>
    </div>
    <div> <ShoppingCartIcon style={{marginLeft:"20%"}}/>
    <p style={{fontSize: "13px", fontWeight:"700"}}><Link to="/cartPage" style={{textDecoration:"none",color:"#000"}}>Cart({totalQuantity})</Link></p>
    </div>
    
    <div><PersonIcon style={{marginLeft:"20%"}}/>
    <p style={{fontSize: "13px", fontWeight:"700"}}><Link to="/account" style={{textDecoration:"none",color:"#000"}}>Account</Link></p>
    </div>

     <div><SupervisorAccountIcon style={{marginLeft:"20%"}}/>
    <p style={{fontSize: "13px", fontWeight:"700"}}><Link to="#" style={{textDecoration:"none",color:"#000"}}>Admin</Link></p>
    </div>

    </div>
    </div>
    </>
  )
}

export default Footer
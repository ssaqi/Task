import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getCartTotal } from "../feature/cartSlice";
const Header = () => {
    const { cart, totalQuantity } = useSelector((state) => state.allCart);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart]);
    return (
        <>
            <Navbar className='sticky-top' bg="white"  variant="dark" >
                <Container>
                    <NavLink to="#" className="text-decoration-none text-light mx-2 text-dark">SAYLANI WALFARE</NavLink>
                    <Nav className="ms-auto">
                        {/* <NavLink to="#" className="text-decoration-none text-light mx-2">Home</NavLink> */}
                        <ShoppingCartIcon style={{marginLeft:"10%",color:"green"}}/>
                         <p style={{fontSize: "13px", fontWeight:"700"}}>
                        <NavLink to="/cartPage" style={{textDecoration:"none",color:"#000"}}>
                        Cart({totalQuantity})</NavLink></p>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
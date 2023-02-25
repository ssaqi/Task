import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Acc from '../Application/Acc'
import Footer from './Footer'
const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
       
            {
                logindata.length === 0 ? "errror" :
                    <>
                      <nav class="navbar bg-light sticky-top">
                      <div class="container">
                        <h3>{logindata[0].name}</h3>
                
                <Button className='btnn' onClick={userlogout}>LogOut</Button>
            
                        </div>
                        </nav>

                {
                    logindata[0].date === todayDate ? 
                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>:""
                }   
                     
                    </>
            }
             <Acc/>
             <br/><br/><br/><br/><br/>
             <br/><br/><br/>
             <Footer/>
          
        </>
    )
}

export default Details























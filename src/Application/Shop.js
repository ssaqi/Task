import React from 'react'
import G1 from '../Application/Img/g1.jpg';
import G2 from '../Application/Img/g2.jpg';
import G3 from '../Application/Img/g3.jpg';
import G4 from '../Application/Img/g4.jpg';

function Shop() {
  return (
    <>
    <div className='container'>
        <br/><br/>
    <div className="row row-cols-1 row-cols-md-4 g-4 hp">     
  <div className="col">
    
      <img src={G1} className="card-img-top" alt="..." style={{height: "137px",borderRadius:"20px"}} />
      <div className="card-body">
        <h5 className="card-title text-center">Grosery</h5>
  
    </div>
  </div>
  <div className="col c1">
      <img src={G2} className="card-img-top" alt="..." style={{height: "137px",borderRadius:"20px"}} />
      <div className="card-body">
        <h5 className='card-tittle text-center'>Fruits</h5>
    </div>
  </div>
  <div className="col c1">
      <img src={G3} className="card-img-top" alt="..." style={{height: "137px",borderRadius:"20px"}} />
      <div className="card-body">
        <h5 className="card-title text-center">Vagetable</h5>
      </div>
  </div>
  <div className="col c1">
      <img src={G4} className="card-img-top" alt="..." style={{height: "137px",borderRadius:"20px"}}/>
      <div className="card-body">
        <h5 className="card-title text-center">Masale</h5>
    </div>
  </div>

</div>
</div>
    
    </>
  )
}

export default Shop
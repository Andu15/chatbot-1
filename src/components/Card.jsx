import React  from 'react';
import smallLogo from '../assets/logoTottus-64x64.png';
// import useState from 'react'



export const Card = () => {

  // const [ubicacion, setUbicacion] = useState([]);
return(
  <>
  {/* style= {"width:18rem;"} */}
  <div className="myCard" >
    <img src={smallLogo} className="card-img-top" alt="..."/>
    <div className="">
      <h5 className="card-title">Paneton tottus</h5>
      <p className="card-text">s/9.25 </p>
    </div>
    <div className="cardButtons">
      <button type = "button" className="card-Btn-Stock">Ubicacion</button>
      <button type = "button" className="card-Btn-Stock">Stock</button>
    </div>
  </div>
  <div className="myCard" >
    <img src={smallLogo} className="card-img-top" alt="..."/>
    <div className="">
      <h5 className="card-title">Paneton tottus</h5>
      <p className="card-text">s/9.25 </p>
    </div>
    <div className="cardButtons">
      <button type = "button" className="card-Btn-Stock">Ubicacion</button>
      <button type = "button" className="card-Btn-Stock">Stock</button>
    </div>
  </div>
  </>
)
}
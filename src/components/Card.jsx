import React  from 'react';
import smallLogo from '../assets/logoTottus-64x64.png';
// import useState from 'react'



export const Card = () => {

  // const [ubicacion, setUbicacion] = useState([]);
return(
  <>
  {/* style= {"width:18rem;"} */}
  <div class="myCard" >
    <img src={smallLogo} class="card-img-top" alt="..."/>
    <div class="">
      <h5 class="card-title">Paneton tottus</h5>
      <p class="card-text">s/9.25 </p>
    </div>
    <div class="cardButtons">
      <button type = "button" class="card-Btn-Stock">Ubicacion</button>
      <button type = "button" class="card-Btn-Stock">Stock</button>
    </div>
  </div>
  <div class="myCard" >
    <img src={smallLogo} class="card-img-top" alt="..."/>
    <div class="">
      <h5 class="card-title">Paneton tottus</h5>
      <p class="card-text">s/9.25 </p>
    </div>
    <div class="cardButtons">
      <button type = "button" class="card-Btn-Stock">Ubicacion</button>
      <button type = "button" class="card-Btn-Stock">Stock</button>
    </div>
  </div>
  </>
)
}
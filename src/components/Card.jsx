import React  from 'react';
// import useState from 'react'



export const Card = () => {

  // const [ubicacion, setUbicacion] = useState([]);
return(
  <>
  {/* style= {"width:18rem;"} */}
  <div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Paneton tottus</h5>
    <p class="card-text">s/9.25 </p>
  </div>
  <div class="card-body">
    <a href="/" class="card-link">Ubicación</a>
    <button type = "button" class="card-Btn-Stock">Stock</button>
  </div>
</div>
  </>
)
}
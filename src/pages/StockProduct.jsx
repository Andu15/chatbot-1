import BtnReturn from '../components/BtnReturn';
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

const StockProduct = ({ apiGetProduct }) => {

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const decoded = jwt_decode(tokenPar);
  console.log(decoded);
  console.log(apiGetProduct);

  return (
<<<<<<< HEAD
    // style="width: 18rem;"
    <div class="card">
  <div><h5 class="card-title">nombre del producto</h5></div>
  <img src="/" class="card-img-top" alt="product"/>
  <div class="card-body">
    
    <p class="card-text">Descripcion del producto</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  
</div>
=======
    <section>
      <BtnReturn />
    </section>
>>>>>>> 7080353d91289e4c7ee7a2d06edbf6137a0de170
  )
}

export default StockProduct

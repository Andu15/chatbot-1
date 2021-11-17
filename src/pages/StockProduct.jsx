import BtnReturn from '../components/BtnReturn';
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

const StockProduct = ({ apiGetProduct }) => {

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const decoded = jwt_decode(tokenPar);
  console.log(decoded);
  apiGetProduct(decoded.nombreproducto, decoded.codigotienda, "1", "20")
  .then(e=>console.log(e))

  return (
    <section>
      <BtnReturn />
    </section>
  )
}

export default StockProduct;

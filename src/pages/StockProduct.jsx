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
    <section>
      < BtnReturn />
    </section>
  )
}

export default StockProduct

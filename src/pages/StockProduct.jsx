import {useState, useEffect} from 'react';
import BtnReturn from '../components/BtnReturn';
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import StockAvalaible from '../components/StockAvalaible.jsx';

const StockProduct = ({ apiGetProduct }) => {

  const [dataProducts, setDataProducts] = useState([]);

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const decoded = jwt_decode(tokenPar);
  console.log(decoded);

  const getProduct = async () => {
    const data = await apiGetProduct(decoded.nombreproducto, decoded.codigotienda, "1", "20")
    setDataProducts(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  // console.log(dataProducts)


  return (
    <section>
      <BtnReturn />
      <StockAvalaible dataProducts={dataProducts} setDataProducts={setDataProducts}/>
    </section>
  )
}

export default StockProduct;

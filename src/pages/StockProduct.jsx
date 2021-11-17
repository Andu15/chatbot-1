import {useState, useEffect} from 'react';
import BtnReturn from '../components/BtnReturn';
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import StockAvalaible from '../components/StockAvalaible.jsx';

const StockProduct = ({ apiGetProductSku }) => {

  const [uniqueProduct, setUniqueProduct] = useState([]);

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const decoded = jwt_decode(tokenPar);

  localStorage.setItem('nombretienda', decoded.nombretienda);
  localStorage.setItem('codigotienda', decoded.codigotienda);

  const queryProduct = async() =>{
    const info = await apiGetProductSku(decoded.codigosku);
    setUniqueProduct(info)
  };

  useEffect(()=>{
    queryProduct();
  }, []);

  return (
    <section>
      <BtnReturn />
      {/* <StockAvalaible uniqueProduct={uniqueProduct}/> */}
      { !!uniqueProduct.length && <StockAvalaible uniqueProduct={uniqueProduct}/>}
    </section>
  )
}

export default StockProduct;

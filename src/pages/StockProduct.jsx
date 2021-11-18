import {useState, useEffect} from 'react';
import BtnReturn from '../components/BtnReturn';
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import StockAvalaible from '../components/StockAvalaible.jsx';
import StockNotAvalaible from '../components/StockNotAvalaible.jsx';

const StockProduct = ({ apiGetProductSku }) => {

  const [uniqueProduct, setUniqueProduct] = useState([]);

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const decoded = jwt_decode(tokenPar);
  console.log(decoded);

  sessionStorage.setItem('nombretienda', decoded.nombretienda);
  sessionStorage.setItem('codigotienda', decoded.codigotienda);
  sessionStorage.setItem('codigopais', decoded.codigopais);
  // sessionStorage.setItem('codigopais', decoded.codigopais);

  const queryProduct = async() =>{
    const info = await apiGetProductSku(decoded.codigosku, decoded.codigotienda);
    setUniqueProduct(info);
  };

  useEffect(()=>{
    queryProduct();
  }, []);

  return (
    <section>
      <BtnReturn />
      <StockAvalaible uniqueProduct={uniqueProduct}/>
      {/* <StockNotAvalaible /> */}
        {/* { 
          !!uniqueProduct.length ? <StockAvalaible uniqueProduct={uniqueProduct}/> : <StockNotAvalaible />
        } */}
    </section>
  )
}

export default StockProduct;

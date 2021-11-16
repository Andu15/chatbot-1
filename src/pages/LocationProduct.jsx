import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LocationProduct = () => {

  let {search} = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const decoded = jwt_decode(tokenPar);
  console.log(decoded)
  const pasillo = decoded.codigopasillo;
  console.log(pasillo);
  // const url = `https://storage.googleapis.\com/tot-bi-corp-chatbot-dev.appspot.com/EXPERIENCIA-DIGITAL/${decoded.codigopais}/LABORATORIA/${decoded.codigotienda}/${decoded.codigojerarquia}-${decoded.codigopasillo}.jpg`;

  return (
    <section>
      {/* <img src={url} alt="ubicación del producto"/> */}
    </section>
  )
}

export default LocationProduct;

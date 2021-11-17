import { useEffect } from "react";
import { useLocation} from "react-router-dom";
import jwt_decode from "jwt-decode";
import { apiGetProductSku,getUbicacion} from "../APIS/api";
import { dataDura } from "../APIS/dataDura";
import { getStocks } from "../APIS/api";
import { getstocksFetch } from "../APIS/api";

const LocationProduct = ({apiGetCategori, apiGetProduct}) => {

  
  // const {name} = apiGetCategori;

  let {search} = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const decoded = jwt_decode(tokenPar);
  console.log(decoded);
  const pasilloProd = decoded.codigopasillo.replace(/\./g, " ").replace(/ /g, "");

  const url = `https://storage.googleapis.com/tot-bi-corp-chatbot-dev.appspot.com/EXPERIENCIA-DIGITAL/${decoded.codigopais}/LABORATORIA/${decoded.codigotienda}/${decoded.codigojerarquia}-${pasilloProd}.jpg`;

  const getProduct = async() => {
    //const data = await apiGetProduct(decoded.nombreproducto, '123', '1', '3');

    //const dataConsola=await apiGetProduct("chocolate", '123', '1', '3');

   //console.log("consola produ",dataConsola);

    //console.log(dataDura);

    //traer data de un producto especifico 
    const skuData = await apiGetProductSku("41152615","123");
    //console.log(data)
    console.log("skuData",skuData);
     //const gettoken = await getStocks();

   //console.log("get token location ", gettoken);

   //const getFecth = await  getstocksFetch ();
   //console.log(getFecth);
  //ubicacion de tiendas 

  // const dataPost = {
  //   "codigo_tienda": "123",             //cogido de tienda
  //   "codigo_jerarquia": "J01010705",    // codigo de jerarquia
  //   "x_Country": "pe"                   // codigo de pais
  // }

  //const ubicacion = await  getUbicacion(dataPost);
  //console.log(ubicacion);

  }
  
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section className='d-flex flex-column'>
      <div className="containerBack">
        <i className="fas fa-chevron-left"></i>
        <p>¿Quieres consultar otro producto?</p>
      </div>
      <div className="containerTextProduct">
        <p>{decoded.codigocategoria}</p>
      </div>
      <div className="containerImage">
        <img src={url} alt=''/>
      </div>
      <div className="col titleCarousel">
          <h1>Productos en este pasillo</h1>
          <hr />
        </div>
      <div id="carouselExampleControlsNoTouching" className="carousel slide contentCarrusel" data-bs-touch="false" data-bs-interval="false" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <img src={chocolate} className="d-block w-100" alt="..." className='cardCarousel' /> */}
          </div>
          <div className="carousel-item">
            {/* <img src={galleta} className="d-block w-100" alt="..." className='cardCarousel' /> */}
          </div>
          <div className="carousel-item">
            {/* <img src={paneton} className="d-block w-100" alt="..." className='cardCarousel' /> */}
          </div>
        </div>


        <button className="carousel-control-prev buttonCar" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next buttonCar" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default LocationProduct;
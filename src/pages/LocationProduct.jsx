import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LocationProduct = ({ apiGetProduct }) => {

  const [dataProducts, setDataProducts] = useState([]);

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const decoded = jwt_decode(tokenPar);
  console.log(decoded);
  const pasilloProd = decoded.codigopasillo.replace(/\./g, " ").replace(/ /g, "");

  const url = `https://storage.googleapis.com/tot-bi-corp-chatbot-dev.appspot.com/EXPERIENCIA-DIGITAL/${decoded.codigopais}/LABORATORIA/${decoded.codigotienda}/${decoded.codigojerarquia}-${pasilloProd}.jpg`;

  const getProduct = async () => {
    const data = await apiGetProduct(decoded.nombreproducto, '105', '1', '3');
    setDataProducts(data)
    console.log(data)
  }

  useEffect(() => {
    getProduct();

  }, []);

  console.log(dataProducts)
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
        <img src={url} alt='' />
      </div>
      <div className="col titleCarousel">
        <h1>Productos en este pasillo</h1>
        <hr />
      </div>
      <div id="carouselExampleControlsNoTouching" className="carousel slide contentCarrusel" data-bs-touch="false" data-bs-interval="false" >
        <div className="carousel-inner" >
          {
            dataProducts && dataProducts.map((item, index) => 
              index === 0 ? (<div className="carousel-item active" key={index}>
                <img src={item.images} className="d-block w-50" alt={item.name} />
                <p>{item.description}</p>
                <p>{item.prices}</p>
              </div>) : (<div className="carousel-item " key={index}><img src={item.images} className="d-block w-50" alt={item.name} />
                <p>{item.description}</p>
                <p>{item.prices}</p>
              </div>)
            
            )}
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

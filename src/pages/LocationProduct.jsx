import BtnReturn from '../components/BtnReturn.jsx';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import jwt_decode from "jwt-decode";

const LocationProduct = ({ apiGetProduct }) => {

  const [dataProducts, setDataProducts] = useState([]);

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const decoded = jwt_decode(tokenPar);

  const pasilloProd = decoded.codigopasillo.replace(/\./g, " ").replace(/ /g, "");

  const url = `https://storage.googleapis.com/tot-bi-corp-chatbot-dev.appspot.com/EXPERIENCIA-DIGITAL/${decoded.codigopais}/LABORATORIA/${decoded.codigotienda}/${decoded.codigojerarquia}-${pasilloProd}.jpg`;

  const getProduct = async () => {
    const data = await apiGetProduct(decoded.nombreproducto, '123', '1', '3');
    setDataProducts(data)
    console.log(data)
  }

  useEffect(() => {
    getProduct();

  }, []);

  return (
    <section className='d-flex flex-column'>
      <BtnReturn />
      <div className="containerTextProduct">
        <p>{decoded.codigocategoria}</p>
        <p>Pasillo: {pasilloProd}</p>
      </div>
      <div className="containerImage">
        <img src={url} alt='' />
      </div>
      <div className="col titleCarousel">
        <h1>Productos en este pasillo</h1>
        <hr />
      </div>
      <section className="carouselMainContainerl">
        <div id="carouselExampleControlsNoTouching" className="carousel slide contentCarrusel" data-bs-touch="false" data-bs-interval="false" >
          <div className="carousel-inner" >
            {
              dataProducts && dataProducts.map((item, index) => 
                index === 0 ? (
                <div className="carousel-item active" key={index}>
                  <section className="containerImageText">
                    <img src={item.images} className="" alt={item.name} />
                    <div className="textCarousel">
                      <h5>{item.name}</h5>
                      <p>s/{item.prices} UN</p>
                    </div>
                  </section>
                </div>
                ) : (
                <div className="carousel-item " key={index}>
                  <section className="containerImageText">
                    <img src={item.images} className="" alt={item.name} />
                    <div className="textCarousel">
                      <h5>{item.name}</h5>
                      <p>s/{item.prices} UN</p>
                    </div>
                  </section>
                </div>
                )
              
              )}
          </div>

          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </section>
      
    </section>
  )
}

export default LocationProduct;

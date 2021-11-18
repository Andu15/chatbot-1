import { useEffect, useState } from "react";
import smallLogo from "../assets/logoTottus-64x64.png";
import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { dataDura } from "../APIS/dataDura";

const Products = ({ apiGetProduct }) => {
  const data = dataDura;

  const [product, setProduct] = useState([]);
  const [searcher, setSearcher] = useState([]);

  const codigoTienda = sessionStorage.getItem('codigotienda');
  const codigoPais = sessionStorage.getItem('codigopais');
  const nombreTienda = sessionStorage.getItem('nombretienda');

  const getProduct = async () => {
    const data = await apiGetProduct(searcher, codigoTienda, "1", "");
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, [searcher]);

  //function search//
  const handleSearch = (event) => {
    setSearcher(event.target.value);
  };

  const onClick = () => searcher(product);
  console.log(onClick);

  //data filtrada
  let newData;
  if (!searcher.length >= 1) {
    newData = data;
  } else {
    newData = product.filter((arr) => {
      const dataInput = arr.name.toLowerCase();
      const dataSearch = searcher.toLowerCase();
      return dataInput.includes(dataSearch);
    });
  };
  
  return (
    <section className="">
      <section className="headerProducts">
        <div className="row">
          <div className="col">
            <img src={smallLogo} alt="smallLogo" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>Explora</h1>
            <hr />
          </div>
        </div>
        <div className="row pb-3">
          <div className="col d-flex mt-3">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <section className="textLocation">
            <p>Tottus Angamos</p>
            <p>Av. Angamos Nro. 1803, Surquillo 15038</p>
            </section>
          </div>
        </div>
      </section>
      <Search onChange={handleSearch} product={product} onClick={onClick} />
      <section className="titleProducts">
        <h2>Nuestros productos</h2>
      </section>
      <section className="containerProduts">
        {newData ? <Card newData={newData} /> : (<div class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>)}
      </section>
    </section>
  );
};


export default Products;
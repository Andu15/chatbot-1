//import logo from '../assets/tottusLogo.png';
import { useEffect, useState } from "react";
import smallLogo from "../assets/logoTottus-64x64.png";
import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { dataDura } from "../APIS/dataDura";

const Products = ({ apiGetProduct }) => {
  const data = dataDura;

  const [product, setProduct] = useState([]);
  const [searcher, setSearcher] = useState([])

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const { nombreproducto, codigotienda } = jwt_decode(tokenPar);

  const getProduct = async () => {

    
    const data = await apiGetProduct(nombreproducto, codigotienda, "1", "50");
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  //function search//
  const searchProducts = (dataSearch, buscarProductos) => {
    // if (buscarProductos === "") {
    //   return data;
    // } 
    if (buscarProductos) {
      const arrayCategory = dataSearch.filter(
        (ArrayProduct) =>
          ArrayProduct.nombreproducto.toLowerCase() === buscarProductos.toLowerCase()
      );
      return arrayCategory;
    };
  }
  const handleSearch = (event) => {
    setSearcher(event.target.value)
  };


  console.log(searcher);


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
        <div className="row">
          <div className="col d-flex mt-3">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>Tottus Angamos</p>
          </div>
        </div>
      </section>
      <Search onChange={handleSearch} product={product} />
      <section className="titleProducts">
        <h2>Nuestros productos</h2>
      </section>
      <section className="containerProduts">
        <Card data={data} />
      </section>
    </section>
  );
};

export default Products;

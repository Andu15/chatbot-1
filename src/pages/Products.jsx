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
  const [searcher, setSearcher] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const { nombreproducto, codigotienda } = jwt_decode(tokenPar);

  const getProduct = async () => {
    const data = await apiGetProduct(searcher, codigotienda, "1", "");
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, [searcher]);
  // console.log(product)

  //function search//
  const handleSearch = (event) => {
    setSearcher(event.target.value);

  };
  console.log(product);
  console.log(dataDura);

  let newData;

  if (!searcher.length >= 1) {
    newData = data;
    console.log("datadura", newData);
  } else {
    newData = product.filter((arr) => {
      const dataInput = arr.name.toLowerCase();
      const dataSearch = searcher.toLowerCase();
      return dataInput.includes(dataSearch);
    });
    console.log("datareal", newData);
  }

  // console.log(searcher);

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
        <Card newData={newData} />
      </section>
    </section>
  );
};

export default Products;

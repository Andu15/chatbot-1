//import logo from '../assets/tottusLogo.png';
import {useEffect, useState} from "react"
import smallLogo from '../assets/logoTottus-64x64.png';
import {Card} from '../components/Card';
import { Search } from '../components/Search';
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";


const Products = ({apiGetProduct}) => {

const [product, setProduct] = useState([])

  let {search} = useLocation();
  let query = new URLSearchParams(search);
  const tokenPar = query.getAll("token")[0];
  const {nombreproducto, codigotienda} = jwt_decode(tokenPar);
  const getProduct = async () => {

    const data = await apiGetProduct(nombreproducto, codigotienda, "1","5")
    setProduct(data)

  }
  
  // const {name} = apiGetCategori;
  useEffect( ()=> {
    getProduct();

  }, [ ])


  const handleSearch = (event) => {
console.log(event.target)
  }

  console.log(product)

  return (
    <section className="">
      <section className="headerProducts">
        <div className="row">
          <div className="col">
            <img src={smallLogo} alt = "smallLogo"/>
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
        <Search onChange={handleSearch}/>
      <section className="titleProducts">
        <h2>Nuestros productos</h2>
      </section>
      <section className="containerProduts">
        <Card product={product}/>
      </section>
      
    </section>
  )
}

export default Products;

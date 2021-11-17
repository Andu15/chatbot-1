//import logo from '../assets/tottusLogo.png';
import smallLogo from '../assets/logoTottus-64x64.png';
import {Card} from '../components/Card';
import { Search } from '../components/Search';


const Products = () => {

  return (
    <section className="">
      <section className="headerProducts">
        <div className="row">
          <div className="col">
            <img src={smallLogo}/>
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
        <Search/>
      <section className="titleProducts">
        <h2>Nuestros productos</h2>
      </section>
      <section className="containerProduts">
        <Card/>
      </section>
      
    </section>
  )
}


export default Products;


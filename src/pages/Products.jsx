//import logo from '../assets/tottusLogo.png';
import smallLogo from '../assets/logoTottus-64x64.png';
import {Card} from '../components/Card';
import { Search } from '../components/Search';

const Products = () => {
  return (
    <section className="">
      <section className="headerProducts">
        <div class="row">
          <div class="col">
            <img src={smallLogo} alt="smallLogo"/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h1>Explora</h1>
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col d-flex mt-3">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
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

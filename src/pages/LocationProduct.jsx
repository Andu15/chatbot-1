import React from 'react'
import chocolate from '../img/chocolate.jpg'
import galleta from '../img/galleta.jpg'
import paneton from '../img/paneton.jpg'
import ubicacion from '../img/ubicacion.png'

function LocationProduct() {
  return (
    <section className='d-flex flex-column'>
      <div className="containerBack">
        <i className="fas fa-chevron-left"></i>
        <p>¿Quieres consultar otro producto?</p>
      </div>
      <div className="containerTextProduct">
        <p>Paneton</p>
      </div>
      <div className="containerImage">
        <img src={ubicacion} alt=''/>
      </div>
      <div className="col titleCarousel">
          <h1>Productos en este pasillo</h1>
          <hr />
        </div>
      <div id="carouselExampleControlsNoTouching" className="carousel slide contentCarrusel" data-bs-touch="false" data-bs-interval="false" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={chocolate} className="d-block w-100" alt="..." className='cardCarousel' />
          </div>
          <div className="carousel-item">
            <img src={galleta} className="d-block w-100" alt="..." className='cardCarousel' />
          </div>
          <div className="carousel-item">
            <img src={paneton} className="d-block w-100" alt="..." className='cardCarousel' />
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

export default LocationProduct

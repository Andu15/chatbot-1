import React from 'react'
import chocolate from '../img/chocolate.jpg'
import galleta from '../img/galleta.jpg'
import paneton from '../img/paneton.jpg'
import ubicacion from '../img/ubicacion.png'

function LocationProduct() {
  return (
    <section className='contenedorTotal d-flex flex-column'>
      <div className='d-flex flex-row'>
      <button  type="button" ><i class="fas fa-chevron-left"></i> </button>
      <p>¿Quieres consultar otro producto?</p>
      </div>
      <div>
        <img src={ubicacion} alt='' className='plano'/>
      </div>
      <div id="carouselExampleControlsNoTouching" className="carousel slide contentCarrusel" data-bs-touch="false" data-bs-interval="false" >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={chocolate} class="d-block w-100" alt="..." className='cardCarousel' />
          </div>
          <div class="carousel-item">
            <img src={galleta} class="d-block w-100" alt="..." className='cardCarousel' />
          </div>
          <div class="carousel-item">
            <img src={paneton} class="d-block w-100" alt="..." className='cardCarousel' />
          </div>
        </div>
        <button className="carousel-control-prev buttonCar" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next buttonCar" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default LocationProduct

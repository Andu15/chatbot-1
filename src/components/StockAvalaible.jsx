
const StockAvalaible = ({uniqueProduct}) => {

  const leermas = () =>{
    console.log('aqui va el texto leer mas')
    //<p>{e.description}</p>
  }
  const spinner = <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
  
  const succesfulData = uniqueProduct.map(e=>
    (

    <section className="viewStockproduct" key={e.codigosku}>
      <section className="containerImageStock">
                              <img src={e.images} alt={e.name}/>
      </section>
      <section className="containerTextStock">
        <div className="allTextStock">
          <h3>{e.name}</h3>
          <p>S/ {e.prices} UN</p>
          {
            e.description.length > 50 ? <p>{e.description.substring(0, 100)}<span onClick={leermas}> leer mas...</span></p> :
            <p>{e.description}</p>
          }
        </div>
      </section>
      <section className="textAvalaibleStock">
        <p>STOCK NO DISPONIBLE</p>
      </section>
    </section>
    ))

  return (
    <>
      {
        uniqueProduct ? succesfulData : spinner
      }
    </>
  )
}

export default StockAvalaible;

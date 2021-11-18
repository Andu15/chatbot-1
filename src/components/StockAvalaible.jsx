
const StockAvalaible = ({ uniqueProduct }) => {

  const spinner = <div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  const succesfulData = uniqueProduct.map(e =>
  (
    <section className="viewStockproduct" key={e.codigosku}>
      <section className="containerImageStock">
        <img src={e.images} alt={e.name} />
      </section>
      <section className="containerTextStock">
        <div className="allTextStock">
          <h3>{e.name}</h3>
          <p>{e.marca}</p>
          <p>S/ {e.prices}</p>
          {
            e.description.length > 50 ? <p>{e.description.substring(0, 100)}...</p> :
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

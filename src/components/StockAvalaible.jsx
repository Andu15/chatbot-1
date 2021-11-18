
const StockAvalaible = ({ uniqueProduct }) => {

  const spinner = <div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  const succesfulData = uniqueProduct.map(e => (<section className="container" key={e.sku}>
    <div className="row">
      <div className="col">
        <img src={e.images} alt={e.name} />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>{e.name}</h2>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>S/ {e.prices}</h2>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <p>{e.description}</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="alert alert-success" role="alert">STOCK NO DISPONIBLE</div>
      </div>
    </div>
  </section>))

  return (
    <>
      {
        uniqueProduct ? succesfulData : spinner
      }
    </>
  )
}

export default StockAvalaible;

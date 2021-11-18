
const StockAvalaible = ({uniqueProduct}) => {

  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col">
            <img src={uniqueProduct[0].images} alt={uniqueProduct[0].name}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>{uniqueProduct[0].name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>S/ {uniqueProduct[0].prices}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{uniqueProduct[0].description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="alert alert-success" role="alert">{"aun no tenemos stock"} UN</div>
          </div>
        </div>
  </section>
    </>
  )
}

export default StockAvalaible;

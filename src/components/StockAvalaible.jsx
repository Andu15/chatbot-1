
const StockAvalaible = ({dataProducts, setDataProducts}) => {

  console.log(dataProducts);

  const result = <section className="container">
    <div className="row">
      <div className="col">
        <img src={dataProducts.images[0]} alt={dataProducts.name}/>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>{dataProducts.name}</h2>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>S/ {dataProducts.prices}</h2>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <p>{dataProducts.description}</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="alert alert-success" role="alert">{"aun no tenemos stock"} UN</div>
      </div>
    </div>
  </section>


  return (
    <>
      {
        dataProducts.map((arr) => arr.marca === "Tottus" ? result : result)
      }
    </>
  )
}

export default StockAvalaible;

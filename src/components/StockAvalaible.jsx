
const StockAvalaible = ({nameProduct, imgProduct, priceProduct, descriptionProduct, stockProduct}) => {
  return (
    <section class="container">
      <div class="row">
        <div class="col">
          <img src={imgProduct} alt={nameProduct}/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>{nameProduct}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>{priceProduct}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>{descriptionProduct}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="alert alert-success" role="alert">{stockProduct} UN</div>
        </div>
      </div>
    </section>
  )
}

export default StockAvalaible;

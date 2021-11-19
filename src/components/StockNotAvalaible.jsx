const StockNotAvalaible = ({ stock }) => {
  console.log("stockssss caruusel", stock);
  const filterStock = stock.filter((key) => key.storeName !== " ");
  console.log("filterStock", filterStock);

    let numero = 0;
    filterStock.forEach((a) => {
      numero += parseInt(a.stockOnLine);
    })  
    console.log(numero);


  return (
    <section className="textAvalaibleStock">
      <p>
        {" "}
        STOCK: Lo sentimos, no tenemos el producto en esta tienda , puedes
        encontrarlo en:{" "}
      </p>

      <section className="containerStockStore">
        {filterStock &&
          filterStock.map((item, index) => {
            console.log(filterStock);

            return (
              <>
              <div key={index} className="stocKStore">
                <div className="d-flex">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <h3>{item.storeName}</h3>
                </div>
                <h4>{item.stockAvailable} UN</h4>
              </div>
            </>
            );
            
          })}
          <div className="stocKStore">
                <div className="d-flex">
                <h3>tottus.com</h3>
                </div>
              <h4>{numero} UN</h4>
          </div>
          <div className="stocKStore">
                <div className="d-flex">
                <h3>Fazil</h3>
                </div>
              <h4>{numero} UN</h4>
          </div>
      </section>
    </section>
  );
};

export default StockNotAvalaible;

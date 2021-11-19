const StockNotAvalaible = ({ stock }) => {
  console.log("stockssss caruusel", stock);
  const filterStock = stock.filter((key) => key.storeName !== " ");
  console.log("filterStock", filterStock);

  return (
    <section className="textAvalaibleStock">
      <p>
        {" "}
        STOCK: Lo sentimos, no tenemos el producto en esta tienda , puedes
        encontrarlo en:{" "}
      </p>

      <section>
        {filterStock &&
          filterStock.map((item, index) => {
            console.log("stockkkkkk", item.storeName !== " ");

            return (
              <div key={index}>
                <p>{item.storeName}</p>
                <p>{item.stockAvailable}</p>
              </div>
            );
          })}
      </section>
    </section>
  );
};

export default StockNotAvalaible;

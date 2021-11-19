import { set } from "date-fns/esm";
import { useEffect, useState } from "react";
import { getStockSku } from "../APIS/api";
import StockNotAvalaible from "../components/StockNotAvalaible";

const StockAvalaible = ({ uniqueProduct, decoded }) => {
  const [vermas, setVermas] = useState(false);
  const [stock, setSock] = useState([]);
  const [filterStore, setfilterStore] = useState(false);

  console.log("decoded", decoded);

  useEffect(() => {
    getstocks();
  }, []);

  const getstocks = async () => {
    // const codigoSku = decoded && decoded.codigosku;
    // const stockProduct = await getStockSku(codigoSku);
    const stockProduct = await getStockSku("02200908");

      console.log("data stock api ", stockProduct);
     setSock(stockProduct);

    //viendo si hay un stock en la tienda
    const filterStoreStock = stockProduct.filter(
      (ele) => ele.store === parseInt(decoded.codigotienda)
    );
    setfilterStore(filterStoreStock);
    console.log("filtrado", filterStoreStock);
  };

  const spinner = (
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );

  const succesfulData =
    uniqueProduct &&
    uniqueProduct.map((e) => (
      <section className="viewStockproduct" key={e.codigosku}>
        <section className="containerImageStock">
          <img src={e.images} alt={e.name} />
        </section>
        <section className="containerTextStock">
          <div className="allTextStock">
            <h3>{e.name}</h3>
            <p>S/ {e.prices} UN</p>
            {e.description.length > 50 ? (
              <p>
                {e.description.substring(0, 100)}
                {vermas ? e.description.substring(100, 800) : ""}
                <span onClick={() => setVermas(!vermas)}>
                  {" "}
                  {vermas ? "ver menos..." : "leer mas..."}
                </span>
              </p>
            ) : (
              <p>{e.description}</p>
            )}
          </div>
        </section>
        {stock && (stock.length>0)?(filterStore.length>0?(
          filterStore.map((elem) => {
            console.log("keyss", elem);
            if (elem.stockAvailable) {
              return (
                <section className="textAvalaibleStock">
                  <p> STOCK DISPONIBLE {elem.stockAvailable} UND</p>
                </section>
              );
            } else  {
              return (
                <StockNotAvalaible  stock={stock}/>
              );
            }
          }))
          :<StockNotAvalaible  stock={stock}/>): 
          <section className="textAvalaibleStock">
            <p>
              {" "}
              STOCK: Lo sentimos, no tenemos el stock en la tienda Tottus {" "}
            </p>
          </section>
        }
      </section>
    ));

  return <>{uniqueProduct ? succesfulData : spinner}</>;
};

export default StockAvalaible;

export const Card = ({newData}) => {

  return (
    <>
      {newData.map((elem) => (
        <div key={elem.sku} className="myCard">
          <img src={elem.images} className="card-img-top" alt={elem.name} />
          <div className="">
            <h5 className="card-title">{elem.name}</h5>
            <p className="card-text">s/ {elem.prices}</p>
          </div>
          <div className="cardButtons">
            <button type="button" className="card-Btn-Stock">
              Ubicación
            </button>
            <button type="button" className="card-Btn-Stock">
              Stock
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

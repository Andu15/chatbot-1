import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";

export const Card = ({newData}) => {
  // console.log(newData);
  let navigate = useNavigate();

  const handlerLocation = (data) =>{
    const token = jwt.sign(
      data,
      "BLABLA"
    );
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RpZ29wYWlzIjoiUEUiLCJub21icmVwcm9kdWN0byI6ImRlc29kb3JhbnRlcyIsImNvZGlnb3RpZW5kYSI6IjEyMyIsIm5vbWJyZXRpZW5kYSI6IlRvdHR1cyBBbmdhbW9zIiwiY29kaWdvY2F0ZWdvcmlhIjoiREVTT0RPUkFOVEVTIFBFUlNPTkFMRVMiLCJjb2RpZ29wYXNpbGxvIjoiNi41IEEiLCJjb2RpZ29qZXJhcnF1aWEiOiJKMDIwMjAzMDMiLCJpYXQiOjE2MzcwMDk4MzR9.xWI6kPFvSogZiMe7xBxoUx-fbxLWB7YyPuyURCmVhLM";
    navigate(`/locationproduct?token=${token}`);
  };

  const handlerStock = (data) => {

  }

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
            <button type="button" className="card-Btn-Stock" onClick={() => handlerLocation(elem)}>
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

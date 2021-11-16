import './Sass/app.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Products from './pages/Products.jsx';
import LocationProduct from './pages/LocationProduct.jsx';
import StockProduct from './pages/StockProduct.jsx';
import Error404 from './pages/Error404';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route  path="/" element={<Home />} />
          <Route  path="/products" element={<Products />} />
          <Route  path="/location" element={<LocationProduct />} />
          <Route  path="/stock" element={<StockProduct />} />

          <Route
            path="*"
            element={<Error404 />}
          />
=======
          <Route path="/locationproduct" element={<LocationProduct />}/>
          <Route path="/stockproduct" element={<StockProduct />} />
          <Route path="/experienciatienda" element={<Products />} />
          <Route path="*" element={<Error404 />} />
>>>>>>> c649e9672b8d172a5c4f75f8ccfd6e1457afc441
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

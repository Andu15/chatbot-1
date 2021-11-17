import './Sass/app.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './pages/Products.jsx';
import LocationProduct from './pages/LocationProduct.jsx';
import StockProduct from './pages/StockProduct.jsx';
import Error404 from './pages/Error404';
import {apiGetCategori, apiGetProduct} from './APIS/api';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/locationproduct" element={<LocationProduct apiGetCategori={apiGetCategori} apiGetProduct={apiGetProduct}/>}/>
          <Route path="/stockproduct" element={<StockProduct apiGetCategori={apiGetCategori} apiGetProduct={apiGetProduct}/>} />
          <Route path="/experienciatienda" element={<Products apiGetCategori={apiGetCategori} apiGetProduct={apiGetProduct}/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

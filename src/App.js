import './Sass/app.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import LocationProduct from './pages/LocationProduct.jsx';
import StockProduct from './pages/StockProduct.jsx';
import Error404 from './pages/Error404';
import StockAvalaible from './components/StockAvalaible.jsx';


const App = () => {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/products" element={<Products />} />
          <Route  path="/location" element={<LocationProduct />} />
          <Route  path="/stock" element={<StockProduct />} />
          <Route
            path="*"
            element={<Error404 />}
          />
        </Routes>
      </BrowserRouter> */}
    <StockAvalaible />
    </>
  );
}

export default App;

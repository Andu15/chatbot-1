import axios from "axios";
import { datapasilloCategory } from "./category";

//search for  category
export const apiGetCategori = async (
  categoria,
  tienda,
  pagInicio,
  pagFinal
) => {
  const url = `https://www.tottus.com.pe/api/product-search/by-category-slug?slug=${categoria}&channel=${tienda}&page=${pagInicio}&perPage=${pagFinal}`;
  const dataAxios = await axios({
    url: url,
    method: "GET",
  });

  const resData = dataAxios.data.results;

  const filterpasillo = datapasilloCategory.filter(
    (res) =>
      res.codigo_tienda === Number(tienda) &&
      res.categoria.includes(categoria.toUpperCase())
  );
  
  console.log("oasillos", filterpasillo);

  const resultado = resData.map((key) => {
    const data = {
      id: key.id,
      description: key.description,
      images: key.images[0],
      name: key.name,
      prices: key.prices.regularPrice,
      marca: key.attributes.marca,
      codigosku: key.sku,
      codigojerarquia: filterpasillo[0].jerarquia,
      codigopasillo: filterpasillo[0].pasillo,
      codigopais: "PE",
      nombreproducto: categoria, //tengo duda aqui si debe ser categroia o producto
      codigotienda: tienda,
    };
    return data;
  });
  return resultado;
};

export const apiGetProduct = async (prod, tienda, pagInicio, pagFinal) => {
  const url = `https://www.tottus.com.pe/api/product-search?q=${prod}&channel=${tienda}&page=${pagInicio}&perPage=${pagFinal}`;
  const dataAxios = await axios({
    url: url,
    method: "GET",
  });

  const resData = dataAxios.data.results;
   console.log("dataAxios",resData);
 

  const resultado = resData.map((key) => {
  
     //filtrra pasillos 
     const filterpasillo = datapasilloCategory.filter(
      (res) =>{
       //console.log(res);
        return (res.codigo_tienda === Number(tienda) &&
        res.jerarquia === key.attributes.hierarchy.slice(0,9))
      }
    );


    console.log("datafilter",filterpasillo.map( key => key.pasillo));

    const data = {
      id: key.id,
      images: key.images[0],
      name: key.name,
      prices: key.prices.regularPrice,
      codigosku: key.sku,
      marca: key.attributes.marca,
      ean: key.attributes.ean,
      description: key.description,
      codigojerarquia:key.attributes.hierarchy.slice(0,9),
      codigopasillo: filterpasillo[0].pasillo,
      codigopais: "PE",
      nombreproducto: prod, //tengo duda aqui si debe ser categroia o producto
      codigotienda: tienda,
    };
    return data;
  });
  console.log("data prouct en api.js", resultado);
  return resultado;
};

//traer data de un producto especifico

export const apiGetProductSku = async (sku, tienda) => {
  const url = `https://www.tottus.com.pe/api/content/skuList?productsList%5B0%5D=${sku}`;
  const dataAxios = await axios({
    url: url,
    method: "GET",
  });

  //console.log("dataAxios sku", dataAxios);
  const resData = dataAxios.data.results;
  console.log("respuestaSku", resData);

  const resultado = resData.map((key) => {
    // console.log("api");
    // console.log("api",key.attributes.hierarchy.slice(0,9));
    //filtrra pasillos 
    const filterpasillo = datapasilloCategory.filter(
      (res) =>{
       //console.log(res);
        return (res.codigo_tienda === Number(tienda) &&
        res.jerarquia=== key.attributes.hierarchy.slice(0,9))
      }
    );

    console.log("filterpasillo", filterpasillo);
    console.log("jeraquia",key.attributes.hierarchy.slice(0,9));
    
    const data = {
      id: key.id,
      images: key.images[0],
      name: key.name,
      prices: key.prices.regularPrice,
      codigosku: key.sku,
      description: key.description,
      ean: key.attributes.ean,
      codigojerarquia:key.attributes.hierarchy.slice(0,9),
      codigopasillo: filterpasillo[0].pasillo,
      codigopais: "PE",
      nombreproducto:key.name, //tengo duda aqui si debe ser categroia o producto
      codigotienda: tienda,
    };
    return data;
  });

  //console.log("datasku api",resultado);

  return resultado;
};

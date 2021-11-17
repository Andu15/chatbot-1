import axios from "axios";

// search for  category
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
  console.log("dataAxioscategory",dataAxios );

  const resData = dataAxios.data.results;
  console.log("respuestadatacategory", resData);

  const resultado = resData.map((key) => {
    const data = {
      id: key.id,
      description: key.description,
      images: key.images[0],
      name: key.name,
      prices: key.prices.regularPrice,
      marca:key.attributes.marca,
      sku: key.sku,
    };
    return data;
  });

  console.log("marca",resultado);
  return resultado;
};

// search for product
export const apiGetProduct = async (prod, tienda, pagInicio, pagFinal) => {
  const url = `https://www.tottus.com.pe/api/product-search?q=${prod}&channel=${tienda}&page=${pagInicio}&perPage=${pagFinal}`;
  const dataAxios = await axios({
    url: url,
    method: "GET",
  });


  //console.log("dataAxiosproduct",dataAxios );
  const resData = dataAxios.data.results;
  //console.log( "respuestadaproduct",resData);

  const resultado = resData.map((key) => {
    const data = {
      id: key.id,
      images: key.images[0],
      name: key.name,
      prices: key.prices.regularPrice,
      sku: key.sku,
      marca:key.attributes.marca,
      ean:key.attributes.ean,
      description: key.description,
    };
    return data;
  });

   //console.log("marca",resultado)

  return resultado;
};

// traer data de un producto especifico 
export const apiGetProductSku = async (sku) => {
  
  const url = `https://www.tottus.com.pe/api/content/skuList?productsList%5B0%5D=${sku}`;

  const dataAxios = await axios({
    url: url,
    method: "GET",
  });

  console.log("dataAxios sku",dataAxios );
  const resData = dataAxios.data.results;


  console.log( "respuesku",resData);

  const resultado = resData.map((key) => {
    const data = {
      id: key.id,
      images: key.images[0],
      name: key.name,
      prices: key.prices.regularPrice,
      sku: key.sku,
      description: key.description,
      ean:key.attributes.ean
    };
    return data;
  });

  console.log(resultado)

  return resultado;
};

// traer la ubicacion
export const getUbicacion = async (data) => {
  
  //const urlp = `https://www.tottus.com.pe/api/content/skuList?productsList%5B0%5D=${sku}`;
  const url= "https://chatbot-spreadsheet-dot-tot-bi-corp-chatbot-dev.appspot.com/api/v1/Request/FindSpreadsheetTiendaUbicacionByJerarquia";
  const dataAxios = await axios({
    url: url,
    method: "POST",
    data: data,
})

console.log("ubicacion", dataAxios.data);
  
};












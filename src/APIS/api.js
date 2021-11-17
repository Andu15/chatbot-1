import axios from "axios";

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

  const resultado = resData.map((key) => {
    const data = {
      id: key.id,
      description: key.description,
      images: key.images[0],
      name: key.name,
      prices: key.prices.regularPrice,
      marca: key.attributes.marca,
      sku: key.sku,
    };
    return data;
  });
  return resultado;
};

export const apiGetProduct = async (prod, tienda, pagInicio, pagFinal) => {
  console.log({ prod, tienda, pagInicio, pagFinal });
  const url = `https://www.tottus.com.pe/api/product-search?q=${prod}&channel=${tienda}&page=${pagInicio}&perPage=${pagFinal}`;
  const dataAxios = await axios({
    url: url,
    method: "GET",
  });

  const resData = dataAxios.data.results;

  const resultado = resData.map((key) => {
    const data = {
      id: key.id,
      images: key.images[0],
      name: key.name,
      prices: key.prices.regularPrice,
      sku: key.sku,
      marca: key.attributes.marca,
      ean: key.attributes.ean,
      description: key.description,
    };
    return data;
  });
  return resultado;
};

//traer data de un producto especifico 

export const apiGetProductSku = async (sku) => {
  const url = `https://www.tottus.com.pe/api/content/skuList?productsList%5B0%5D=${sku}`;

  const dataAxios = await axios({
    url: url,
    method: "GET",
  });
  const resData = dataAxios.data.results;

  const resultado = resData.map((key) => {
    const data = {
      id: key.id,
      images: key.images[0],
      name: key.name,
      prices: key.prices.regularPrice,
      sku: key.sku,
      description: key.description,
      ean: key.attributes.ean
    };
    return data;
  });
  return resultado;
};

export const getUbicacion = async (data) => {
  const url = "https://chatbot-spreadsheet-dot-tot-bi-corp-chatbot-dev.appspot.com/api/v1/Request/FindSpreadsheetTiendaUbicacionByJerarquia";
  const dataAxios = await axios({
    url: url,
    method: "POST",
    data: data,
  })
  console.log("ubicacion", dataAxios.data);
};

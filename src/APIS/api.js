import axios from "axios";
// console.log("ESTAS EN API.js ");

//search for  category 
export const  apiGetCategori = async(categoria, tienda, pagInicio, pagFinal) => {
  const url = `https://www.tottus.com.pe/api/product-search/by-category-slug?slug=${categoria}&channel=${tienda}&page=${pagInicio}&perPage=${pagFinal}`;
  const dataAxios =  await axios({
      url: url,
      method: "GET",
  });

  const resData = dataAxios.data.results;

  const resultado = resData.map( key => {
    const data = {
        id:key.id,
        description:key.description,
        images:key.images[0],
        name:key.name,
        prices:key.prices.regularPrice,
        sku:key.sku
      }
    return data ;
  })
  return   resultado;
};

// search for product
export const  apiGetProduct= async (prod,tienda, pagInicio, pagFinal) => { 
  const url =`https://www.tottus.com.pe/api/product-search?q=${prod}&channel=${tienda}&page=${pagInicio}&perPage=${pagFinal}`;
  const dataAxios =  await axios({
     url: url,
     method: "GET",
 });

 const resData= dataAxios.data.results;

 const resultado = resData.map( key => {
     const data = {
         id:key.id,
         images:key.images[0],
         name:key.name,
         prices:key.prices.regularPrice,
         sku:key.sku,
         description:key.description
     }
     return data ;
    }
   )
 return resultado;
}
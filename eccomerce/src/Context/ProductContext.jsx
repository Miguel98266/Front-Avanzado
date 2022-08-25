import { createContext, useState, useEffect, useContext } from "react";
import { ecomerceApi } from "../API/eccomerce";

const ProductContext = createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState([]); //Data de la API
  const [selectedProduct, setSelectedProduct] = useState({}); // Producto seleccionado
  const [loading, setLoading] = useState(true); // Nos va a indicar cuando los datos estan disponibles
  const [search, setSearch] = useState("");

  const getSingleProductData = async () => {
    try {
      setLoading(true);
      const res = await ecomerceApi.get(`/api/v1/item/`);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    getSingleProductData();
    // eslint-disable-next-line
  }, []);
  const value = {
    products,
    selectedProduct,
    setSelectedProduct,
    loading,
    search,
    setSearch,
  };
  return (
    <ProductContext.Provider value={value} {...props}></ProductContext.Provider>
  );
}
// Paso 3: Consumidor del contexto
// Brindar acceso a la data global de mi contexto
const useProductContext = () => {
  const context = useContext(ProductContext);
  return context;
};
// Paso 4: Exportar las funciones del Provider y el Consumer
export { ProductProvider, useProductContext };

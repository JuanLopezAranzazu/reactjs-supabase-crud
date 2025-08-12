import { createContext, useContext, useState, useEffect } from "react";
import supabase from "../supabase-client";

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProducts must be used within a ProductProvider");
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener todos los productos
  const getProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("Product").select("*");
    if (error) setError(error.message);
    else setProducts(data);
    setLoading(false);
  };

  // Obtener un producto por ID
  const getProductById = async (id) => {
    const { data, error } = await supabase
      .from("Product")
      .select("*")
      .eq("id", id)
      .single();
    if (error) setError(error.message);
    return data;
  };

  // Crear un nuevo producto
  const createProduct = async (product) => {
    const { error } = await supabase.from("Product").insert(product);
    if (!error) getProducts();
  };

  // Actualizar un producto
  const updateProduct = async (id, product) => {
    const { error } = await supabase
      .from("Product")
      .update(product)
      .eq("id", id);
    if (!error) getProducts();
  };

  // Eliminar un producto
  const deleteProduct = async (id) => {
    const { error } = await supabase.from("Product").delete().eq("id", id);
    if (!error) getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        getProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

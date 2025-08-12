import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../context/ProductContext";
import { Spinner, Alert } from "flowbite-react";

const ProductEdit = () => {
  const { id } = useParams();
  const { getProductById, updateProduct } = useProducts();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        if (!data) throw new Error("Producto no encontrado");
        setProduct(data);
      } catch (err) {
        setError(err.message || "Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, getProductById]);

  const handleSubmit = async (updatedProduct) => {
    await updateProduct(id, updatedProduct);
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center mt-10">
        <Alert color="failure">{error}</Alert>
      </div>
    );
  }

  return (
    <>
      <ProductForm initialData={product} onSubmit={handleSubmit} />
    </>
  );
};

export default ProductEdit;

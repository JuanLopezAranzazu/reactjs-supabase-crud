import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";

const ProductCreate = () => {
  const { createProduct } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = async (product) => {
    await createProduct(product);
    navigate("/");
  };

  return (
    <>
      <ProductForm onSubmit={handleSubmit} />
    </>
  );
};

export default ProductCreate;

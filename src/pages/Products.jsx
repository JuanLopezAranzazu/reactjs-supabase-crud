import { useNavigate } from "react-router-dom";
import ProductTable from "../components/ProductTable";
import { useProducts } from "../context/ProductContext";
import { Button, Spinner, Alert } from "flowbite-react";

const Products = () => {
  const { products, deleteProduct, loading, error } = useProducts();
  const navigate = useNavigate();

  const handleEditProduct = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lista de Productos</h1>

        <Button color="blue" onClick={() => navigate("/create")}>
          Crear
        </Button>
      </div>

      <ProductTable
        products={products}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
      />
    </>
  );
};

export default Products;

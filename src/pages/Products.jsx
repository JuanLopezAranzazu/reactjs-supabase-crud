import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductTable from "../components/ProductTable";
import { useProducts } from "../context/ProductContext";
import {
  Button,
  Spinner,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "flowbite-react";

const Products = () => {
  const { products, deleteProduct, loading, error } = useProducts();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleEditProduct = (id) => {
    navigate(`/edit/${id}`);
  };

  const confirmDeleteProduct = (id) => {
    setProductToDelete(id);
    setShowModal(true);
  };

  const handleDeleteProduct = async () => {
    if (productToDelete) {
      await deleteProduct(productToDelete);
      setShowModal(false);
      setProductToDelete(null);
    }
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
        handleDeleteProduct={confirmDeleteProduct}
      />

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ModalHeader className="border-gray-200">Eliminar Producto</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              ¿Estás seguro de que deseas eliminar este producto?
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Esta acción no se puede deshacer.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleDeleteProduct}>Sí, eliminar</Button>
          <Button color="alternative" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Products;

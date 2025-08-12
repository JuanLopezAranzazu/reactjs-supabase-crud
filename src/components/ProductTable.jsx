import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";

const ProductTable = ({ products, handleEditProduct, handleDeleteProduct }) => {
  return (
    <div className="overflow-x-auto">
      <Table striped hoverable>
        <TableHead>
          <TableRow>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Nombre</TableHeadCell>
            <TableHeadCell>Descripción</TableHeadCell>
            <TableHeadCell>Precio</TableHeadCell>
            <TableHeadCell>Stock</TableHeadCell>
            <TableHeadCell>Acciones</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          {products.map((product) => (
            <TableRow
              key={product.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell>{product.id}</TableCell>
              <TableCell className="font-medium text-gray-900 dark:text-white">
                {product.name}
              </TableCell>
              <TableCell>
                {product.description.length > 50
                  ? `${product.description.substring(0, 50)}...`
                  : product.description}
              </TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell className="flex space-x-2">
                <Button
                  size="xs"
                  color="blue"
                  onClick={() => handleEditProduct(product.id)}
                >
                  Editar
                </Button>
                <Button
                  size="xs"
                  color="red"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;

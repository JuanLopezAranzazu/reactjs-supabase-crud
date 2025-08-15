import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";
import { Formatter } from "../utils/formatter";

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
            <TableHeadCell>Fecha de Creación</TableHeadCell>
            <TableHeadCell>Acciones</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          {products.map((product) => (
            <TableRow
              key={product.id}
              className="bg-white border-gray-200 dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell>{product.id}</TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.name}
              </TableCell>
              <TableCell>
                {product.description.length > 50
                  ? `${product.description.substring(0, 50)}...`
                  : product.description}
              </TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{Formatter.formatDate(product.created_at)}</TableCell>
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

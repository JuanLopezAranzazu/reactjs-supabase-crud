import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Label,
  TextInput,
  Textarea,
  Button,
  HelperText,
  Spinner,
  Alert,
} from "flowbite-react";

const ProductForm = ({ initialData = null, onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    if (!formData.description.trim()) {
      newErrors.description = "La descripción es requerida";
    } else if (formData.description.length < 10) {
      newErrors.description =
        "La descripción debe tener al menos 10 caracteres";
    }

    if (!formData.price) {
      newErrors.price = "El precio es requerido";
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = "El precio debe ser un número positivo";
    }

    if (!formData.stock) {
      newErrors.stock = "El stock es requerido";
    } else if (
      !Number.isInteger(Number(formData.stock)) ||
      Number(formData.stock) < 0
    ) {
      newErrors.stock = "El stock debe ser un número entero no negativo";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      await onSubmit({
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock, 10),
      });
    } catch (err) {
      setError(err.message || "Error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="flex justify-center mt-10">
        <Alert color="failure">{error}</Alert>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow dark:bg-gray-800"
    >
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        {initialData ? "Actualizar Producto" : "Crear Producto"}
      </h1>

      <div className="mb-2 block">
        <Label htmlFor="name">Nombre</Label>
        <TextInput
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre del producto"
          color={errors.name ? "failure" : "gray"}
          required
        />
        <HelperText color={errors.name ? "failure" : "gray"}>
          {errors.name}
        </HelperText>
      </div>

      <div className="mb-2 block">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción del producto"
          rows={4}
          color={errors.description ? "failure" : "gray"}
          required
        />
        <HelperText color={errors.description ? "failure" : "gray"}>
          {errors.description}
        </HelperText>
      </div>

      <div className="mb-2 block">
        <Label htmlFor="price">Precio</Label>
        <TextInput
          id="price"
          type="number"
          step="0.01"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="0.00"
          color={errors.price ? "failure" : "gray"}
          required
        />
        <HelperText color={errors.price ? "failure" : "gray"}>
          {errors.price}
        </HelperText>
      </div>

      <div className="mb-2 block">
        <Label htmlFor="stock">Stock</Label>
        <TextInput
          id="stock"
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="0"
          color={errors.stock ? "failure" : "gray"}
          required
        />
        <HelperText color={errors.stock ? "failure" : "gray"}>
          {errors.stock}
        </HelperText>
      </div>

      <div className="flex gap-3 mt-4">
        <Button color="gray" type="button" onClick={() => navigate(-1)}>
          Volver
        </Button>
        <Button color="blue" type="submit" disabled={loading}>
          {loading && <Spinner size="sm" className="mr-2" />}
          {initialData ? "Actualizar" : "Crear"}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;

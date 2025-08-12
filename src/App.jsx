import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductCreate from "./pages/ProductCreate";
import ProductEdit from "./pages/ProductEdit";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="create" element={<ProductCreate />} />
          <Route path="edit/:id" element={<ProductEdit />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ProductProvider>
  );
};

export default App;

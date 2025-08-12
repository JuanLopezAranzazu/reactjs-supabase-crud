import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
        La página que buscas no existe.
      </p>
      <Button color="blue" onClick={handleGoBack} className="mt-6">
        Ir atrás
      </Button>
    </div>
  );
};

export default NotFound;

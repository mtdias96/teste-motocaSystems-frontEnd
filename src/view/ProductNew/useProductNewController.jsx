import { useForm } from "react-hook-form";
import { useProduct } from "../../app/hooks/useProduct";
import { httpClient } from "../../app/services/httpClient";

export function useProductNewController() {
  const { addProduct } = useProduct();

  const { handleSubmit: hookFormHandleSubmit, register, reset } = useForm();

  const addProductToServer = async (productData) => {
    try {
      const response = await httpClient.post('/motorcycle', productData);
      addProduct(response.data);
      reset()
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleSubmit = hookFormHandleSubmit((data) => {
    addProductToServer(data);
  });

  return { handleSubmit, register };
}

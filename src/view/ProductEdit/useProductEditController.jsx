import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useProduct } from "../../app/hooks/useProduct";
import { httpClient } from "../../app/services/httpClient";

export function useProductEditController(productId) {
  const { productDate, handleUpdateProduct } = useProduct();
  const { handleSubmit: hookFormHandleSubmit, register, setValue, reset } = useForm();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productToEdit = productDate.find((product) => product.id === productId);
    setProduct(productToEdit);
  }, [productId, productDate]);

  useEffect(() => {
    if (product) {
      Object.keys(product).forEach((key) => {
        if (key === 'id') {
          setValue(key, `# ${product[key]}`);
        } else {
          setValue(key, product[key]);
        }
      });
    }
  }, [product, setValue]);


  const updateProduct = async (productData) => {
    const updatedProductData = { ...productData, id: productData.id.replace('#', '') };
    try {
      await httpClient.put(`/motorcycle/${productId}`, updatedProductData);
      handleUpdateProduct(productData);
      reset()
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleSubmit = hookFormHandleSubmit((data) => {
    updateProduct(data);
  });

  return { handleSubmit, register, product };
}


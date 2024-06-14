import { useEffect } from "react";
import { useProduct } from "../../app/hooks/useProduct";
import { httpClient } from "../../app/services/httpClient";

export function useProductListController() {
  const { handleProduct } = useProduct();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await httpClient.get('/motorcycle');
        const data = response.data;
        handleProduct(data);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
        throw new Error('Deu ruim');
      }
    };

    getProducts();
  }, [handleProduct]);
}

import { useState } from "react";
import { useProduct } from "../../../../app/hooks/useProduct";
import { httpClient } from "../../../../app/services/httpClient";
import { sleep } from "../../../../app/utils/sleep";

export function useCardProductController() {
  const  [isLoading, setIsLoading] = useState(false)
  const {handleremoveProductList} = useProduct()

  const handleDeleteProduct = async (id) => {
    try {
      setIsLoading(true)

      //Simula conexão lenta para ver o spinner
      await sleep(1000)
      await httpClient.delete(`/motorcycle/${id}`);
      handleremoveProductList(id);

    } catch (error) {
      console.error("Error creating product:", error);
    }finally{
      setIsLoading(false)
    }
  };

  return {handleDeleteProduct, isLoading}
}

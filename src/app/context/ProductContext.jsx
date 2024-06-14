import PropTypes from 'prop-types';
import { createContext, useCallback, useState } from "react";
import { httpClient } from '../services/httpClient';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productDate, setProductDate] = useState([]);

  const handleProduct = useCallback((products) => {
    setProductDate(products);
  }, []);

  const addProduct = useCallback((newProduct) => {
    setProductDate((prevProducts) => [...prevProducts, newProduct]);
  }, []);

  const handleremoveProductList = (id) => {
    setProductDate((prevProductCart) =>
      prevProductCart.filter((product) => product.id !== id)
    );
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProductDate((prevProduct) =>
      prevProduct.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };



  const refreshProducts = useCallback(async () => {
    try {
      const response = await httpClient.get('/motorcycle');
      setProductDate(response.data);
    } catch (error) {
      console.error('Erro ao atualizar a lista de produtos:', error);
    }
  }, []);

  return (
    <ProductContext.Provider
      value={{ productDate, handleProduct, addProduct, handleremoveProductList, handleUpdateProduct, refreshProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


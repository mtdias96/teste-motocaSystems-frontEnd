import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductEdit } from "../view/ProductEdit";
import { ProductList } from "../view/ProductList";
import { useProductListController } from "../view/ProductList/useProductListController";
import { ProductNew } from "../view/ProductNew";

export function Router(){
  useProductListController();
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={< ProductList/>} />
      <Route path='/novoregistro' element={<ProductNew />} />
      <Route path='/editarregistro/:id' element={<ProductEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

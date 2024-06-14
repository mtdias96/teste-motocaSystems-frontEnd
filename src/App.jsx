import { Router } from "./Router";
import { ProductProvider } from "./app/context/ProductContext";

export default function App(){
  return (
    <ProductProvider>
      <Router/>
    </ProductProvider>
  )
}

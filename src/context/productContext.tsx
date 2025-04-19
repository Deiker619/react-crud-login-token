import { createContext, useContext, useEffect } from "react";
import { Product } from "../interfaces/Product";
import { useProduct } from "../hooks/useProduct";

interface ProductContextType {
    products: Product[];
    onRegisterProduct: (product: Product) => void;
    onDeleteProduct: (id: Product['id']) => void
    onGetProducts: ()=>void,
    onUpdateProduct: (product: Product)=>void
    onGetProduct: (id: Product['id']) => Promise<Product | undefined>
  }
  
const ProductContext = createContext<ProductContextType | null>(null)

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const {onRegisterProduct, onUpdateProduct, onDeleteProduct, onGetProducts, onGetProduct, products} = useProduct()

    useEffect(()=>{

    },[products])
    
  
    return (
      <ProductContext.Provider value={{ products, onGetProducts, onGetProduct, onUpdateProduct, onRegisterProduct, onDeleteProduct }}>
        {children}
      </ProductContext.Provider>
    );
  };

  export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
      throw new Error("useProduct debe usarse dentro de <ProductProvider>");
    }
    return context;
  };
import { useState } from "react";
import { Product } from "../interfaces/Product";
import { useProductContext } from "../context/productContext";

export const useForm = (initialValue:Pick<Product, 'nameProduct' | 'price'>) => {
  const { onRegisterProduct,onUpdateProduct , products } = useProductContext();
  

  const [product, setProduct] =
    useState<Pick<Product, "nameProduct" | "price">>(initialValue);

  const updatedInput = (target: string, value: string | number) => {
    setProduct((prevstate) => ({ ...prevstate, [target]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>, id:number | undefined) => {
    event.preventDefault();

    if(!id){
      const saveProduct = {
        ...product,
        id: products.length + 1,
        category_id: 1,
        description: "producto desde react",
      };
      onRegisterProduct(saveProduct);

    }


    onUpdateProduct(product, id)
    setProduct(initialValue);
  };

  const onLoadProduct = (product:Product)=>{
    console.log(product)
    setProduct({
      nameProduct: product.nameProduct,
      price: product.price,
    });
  }
  return {
    product,
    onSubmit,
    updatedInput,
    onLoadProduct
    
  };
};

import { useState } from "react";
import { Product } from "../interfaces/Product";
import { useProductContext } from "../context/productContext";

export const useForm = () => {
  const { onRegisterProduct, products } = useProductContext();
  const initialValue: Pick<Product, "nameProduct" | "price"> = {
    nameProduct: "",
    price: 0,
  };

  const [product, setProduct] =
    useState<Pick<Product, "nameProduct" | "price">>(initialValue);

  const updatedInput = (target: string, value: string | number) => {
    setProduct((prevstate) => ({ ...prevstate, [target]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const saveProduct = {
      ...product,
      id: products.length + 1,
      category_id: 1,
      description: "producto desde react",
    };
    onRegisterProduct(saveProduct);

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

import { useEffect, useState } from "react";
import { Product } from "../interfaces/Product";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useProduct = () => {
  const url = "http://127.0.0.1:8000/api/";
  const [products, setProducts] = useState<Product[]>([]);
  
  const [isSaved, setIssaved] = useState<boolean>(false);
  const navigate = useNavigate();

  const onGetProducts = async () => {
    //    console.log("Obteniendo Products de", url);
    try {
      const response = await fetch(`${url}product_get`);
      const data = await response.json();
      //    console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error, intente mas tarde");
    }
  };

  const onGetProduct = async (id: Product["id"]) => {
    //  console.log("Obteniendo Products de", url);
    try {
      const response = await fetch(`${url}product_get/${id}`);
      if (response.status === 404) {
        toast.error("Producto no encontrado");
        return navigate("/");
      }
      const data = await response.json();
      //  console.log(data);

      return data as Product;
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error, intente mas tarde");
    }
  };

  const onRegisterProduct = async (product: Product) => {
    //  console.log("Register:", product);

    const response = await fetch(`${url}product_store`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //  const data = await response.json();
    if (response.ok) {
      setIssaved(!isSaved);
      return toast.success("Producto registrado");
    }

    //  console.log(data);
  };

  const onDeleteProduct = async (id: Product["id"]) => {
    //  console.log("Delete", id);

    const response = await fetch(`${url}product_destroy/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //    const data = await response.json();
    //    console.log(data);
    if (response.ok) {
      setIssaved(!isSaved);
      return toast.success("Producto eliminado");
    }
  };

  const onUpdateProduct = (product: Product) => {
    console.log("Update", product);
  };

  useEffect(() => {
    onGetProducts();
  }, [isSaved]);

  return {
    onRegisterProduct,
    onDeleteProduct,
    onUpdateProduct,
    onGetProducts,
    onGetProduct,
    products,
  };
};

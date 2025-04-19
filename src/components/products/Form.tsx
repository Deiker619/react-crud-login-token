import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import { useProductContext } from "../../context/productContext";

export const Form = () => {
  const { id } = useParams();
  const { onSubmit, updatedInput, onLoadProduct, product } = useForm();
  const { onGetProduct } = useProductContext();
  //const [isEditionMode, setisEditionMode] = useState<Boolean>(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    if (id) {
      const data = await onGetProduct(+id);
      if (data) {
      //  console.log(data);
        onLoadProduct(data);
      }
      
    }
  };
  return (
    <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre del producto
        </label>
        <input
          type="text"
          id="name"
          value={product?.nameProduct}
          onChange={(event) => updatedInput("nameProduct", event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Precio
        </label>
        <input
          type="text"
          id="price"
          value={product?.price}
          onChange={(event) => updatedInput("price", event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Registrar Producto
      </button>
    </form>
  );
};

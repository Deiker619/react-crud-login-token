import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/productContext";
import { Table } from "./components/products/Table";
import { Form } from "./components/products/Form";
import { Dashboard } from "./layouts/dashboard";
import { Toaster } from "sonner";
function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" Component={Dashboard}>
              {/* Layouts de la app */}
              <Route index element={<Table />} />
              <Route path="product/register" Component={Form}></Route>
              <Route path="product/update/:id" Component={Form}></Route>
            </Route>
          </Routes>
          <Toaster richColors></Toaster>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Table } from "./components/products/Table";
import { Form } from "./components/products/Form";
import { Dashboard } from "./layouts/dashboard";
import { Toaster } from "sonner";
import { PrivateRoute } from "./components/private/PrivateRoute";
import { Login } from "./components/public/Auth/Login";
import { AuthProvider } from "./context/authContext";
function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />}>
                <Route index element={<Table />} />
                <Route path="product/register" element={<Form />} />
                <Route path="product/update/:id" element={<Form />} />
              </Route>
            </Route>
          </Routes>
          <Toaster richColors></Toaster>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

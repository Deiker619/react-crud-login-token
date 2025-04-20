// components/Layout.tsx
import { Outlet, Link } from "react-router-dom";
import { ProductProvider } from "../context/productContext";
import { useAuthContext } from "../context/authContext";
export const Dashboard = () => {
  const {logout}=useAuthContext()
  return (
    <div>
      <header style={{ padding: "1rem", background: "#eee" }}>
        <nav>
          <div className="flex justify-evenly">
            <div className="flex gap-1">
              <Link to="/">Inicio</Link> |{" "}
              <Link to="/product/register">Registrar Producto</Link>
            </div>
            <div className="">
              <button className="cursor-pointer" onClick={logout}>Salir</button>
            </div>
          </div>
        </nav>
      </header>
      <main className="mx-auto container">
        <ProductProvider>
          <Outlet />
        </ProductProvider>
      </main>
    </div>
  );
};

// components/Layout.tsx
import { Outlet, Link } from 'react-router-dom';
export const Dashboard = ()=>{
  return (
    <div>
      <header style={{ padding: "1rem", background: "#eee" }}>
        <nav>
          <Link to="/">Inicio</Link> |{" "}
          <Link to="/product/register">Registrar Producto</Link>
        </nav>
      </header>
      <main className='mx-auto container'>
        <Outlet /> 
      </main>
    </div>
  );
};


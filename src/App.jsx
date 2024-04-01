import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
const HomePage = lazy(() => import("./Pages/HomePage"));
const CatalogPage = lazy(() => import("./Pages/CatalogPage"));
const CartPage = lazy(() => import("./Pages/CartPage"));
const AdminPage = lazy(() => import("./Pages/AdminPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="5qDvQ1Wp2EtR7yNlG9uKoX3mHifVc" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;

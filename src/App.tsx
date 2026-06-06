import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

import LoginPage from "./pages/LoginPage";
import SignInPage from "./pages/SignInPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignInPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

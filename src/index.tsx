import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import NotFound404 from "./pages/NotFound404.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick={true}
        pauseOnHover={false}
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

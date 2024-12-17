import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import Home from "./pages/Home.tsx";
import Quiz from "./pages/Quiz.tsx";
import Results from "./pages/Results.tsx";
import Leaderboard from "./pages/Leaderboard.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import NotFound404 from "./pages/NotFound404.tsx";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick={true}
          pauseOnHover={false}
          theme="light"
        />
        {/* prettier-ignore */}
        <Routes>
          <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
          <Route path="/quiz" element={<ProtectedRoute> <Quiz /> </ProtectedRoute>}/>
          <Route path="/results" element={<ProtectedRoute> <Results /> </ProtectedRoute>}/>
          <Route path="/leaderboard" element={<ProtectedRoute> <Leaderboard /> </ProtectedRoute>}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

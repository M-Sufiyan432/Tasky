import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  SignUpPage  from "../pages/Signup";
import  SignInPage from "../pages/Signin";
import Home from "../pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { AdminDeshBoard } from "../pages/Admin.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Unauthorized from "../pages/Unauthorized.jsx";
import { AddNotePage } from "../pages/AddTask.jsx";
import useAuthBootstrap from "../hooks/useAuthBootstrap.js";
import FriendsPage from "../pages/Friends.jsx";
// import useGetAllTask from "../hooks/getAllTasks.js";
const App = () => {
  useAuthBootstrap();
  const { authChecked } = useSelector(state => state.user);

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>

          {/* PUBLIC ROUTES */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* PROTECTED ROUTES */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDeshBoard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/addTask"
            element={
              <ProtectedRoute>
                <AddNotePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/friends"
            element={
              <ProtectedRoute>
                <FriendsPage />
              </ProtectedRoute>
            }
          />

          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App
import { MainPage } from "./pages/MainPage/MainPage";
import { Routes as ROUTES } from "./routes";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.Main} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const renderRoutes = (routes) =>
  routes ? (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => (
          <Route
            key={route.key || i}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
    </BrowserRouter>
  ) : null;

export default renderRoutes;

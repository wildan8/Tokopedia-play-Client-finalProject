import React from "react";
import "./App.css";
import AllProduct from "./component/all_product/index";
import DetailProduct from "./component/detail_product/index";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/thumbnail" />} />
        <Route path="/thumbnail" element={<AllProduct />} />
        <Route path="/product-detail/:thumbsID" element={<DetailProduct />} />
      </Routes>
    </>
  );
}

export default App;

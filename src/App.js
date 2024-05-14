import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
// import ApexBarChart from "./ApexBarChart";
const ApexBarChart = lazy(() => import("./ApexBarChart"));
function App() {
  return (
    <>
      <h1>Hello I am Kashfa</h1>

      <BrowserRouter>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<ApexBarChart />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

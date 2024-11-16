import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Layout from "./components/shared/Layout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Route>
        <Route path="login" element={<div>this is login page</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

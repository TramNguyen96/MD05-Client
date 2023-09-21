import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "~/pages/homes/Home";

/* Route Setup */
import RouteHomeBody from "./RouteHomeBody";
import RouteAuth from "./RouteAuth";
import RouteCategory from "./RouteCategory";
import RouteProduct from "./RouteProduct";
import RouteCart from "./RouteCart";

export default function RouteSetUp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<RouteHomeBody />}></Route>
          {RouteCategory}
          {RouteProduct}
        </Route>
        {RouteAuth}
        {RouteCart}

      </Routes>

    </BrowserRouter>
  )
}

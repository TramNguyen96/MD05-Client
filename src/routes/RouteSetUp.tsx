import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "~/pages/homes/Home";

/* Route Setup */
import RouteHomeBody from "./RouteHomeBody";
import RouteAuth from "./RouteAuth";

export default function RouteSetUp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<RouteHomeBody />}></Route>

        </Route>
        {RouteAuth}

      </Routes>

    </BrowserRouter>
  )
}

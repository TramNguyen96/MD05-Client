import { Route } from "react-router-dom";
import Lazy from '../utils/lazies/Lazy';

export default

    <>
        <Route path="/collections/:id" element={Lazy(() => import("@pages/categories/Categories"))()}></Route>
    </>





import { Route } from "react-router-dom";
import Lazy from '../utils/lazies/Lazy';

export default

    <>
        <Route path="/collection/:categoryId" element={Lazy(() => import("@pages/categories/Categories"))()}></Route>
    </>





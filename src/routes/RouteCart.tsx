import { Route } from "react-router-dom";
import Lazy from '../utils/lazies/Lazy';

export default

    <>
        <Route path="/carts" element={Lazy(() => import("@pages/carts/Cart"))()}></Route>
        <Route path="/paid" element={Lazy(() => import("@pages/carts/paid/Paid"))()}></Route>
        <Route path="/history-cart" element={Lazy(() => import("@pages/carts/historyCart/HistoryCart"))()}></Route>
        <Route path="/history-cart/:receiptId" element={Lazy(() => import("@pages/carts/historyCart/receiptDetail/ReceiptDetail"))()}></Route>
    </>





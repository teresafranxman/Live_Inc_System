import { Route, Routes } from "react-router";
import { Home } from "../../features/landing/Home";
import { ProductPage } from "../../features";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<ProductPage />}></Route>
        </Routes>
    );
};
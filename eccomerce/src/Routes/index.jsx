import { Routes, Route } from "react-router-dom";
import { Home,ListProducts,SingleProduct } from "@/pages";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ListProducts/>} />
        <Route path=":productId" element={<SingleProduct />} />
    </Routes>
    </div>
  )
}

export default MainRoutes

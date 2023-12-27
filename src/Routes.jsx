import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AddFarmProducts = React.lazy(() => import("pages/AddFarmProducts"));
const AddFarmProductsOne = React.lazy(() => import("pages/AddFarmProductsOne"));
const AddFarmProductsTwo = React.lazy(() => import("pages/AddFarmProductsTwo"));
const EditProductOne = React.lazy(() => import("pages/EditProductOne"));
const EditProduct = React.lazy(() => import("pages/EditProduct"));
const AddFarmProductsThree = React.lazy(
  () => import("pages/AddFarmProductsThree"),
);
const AddProducedProducts = React.lazy(
  () => import("pages/AddProducedProducts"),
);
const EditAlert = React.lazy(() => import("pages/EditAlert"));
const EditBill = React.lazy(() => import("pages/EditBill"));
const ViewBillOne = React.lazy(() => import("pages/ViewBillOne"));
const ViewBill = React.lazy(() => import("pages/ViewBill"));
const CreateBill = React.lazy(() => import("pages/CreateBill"));
const Dashboardmain = React.lazy(() => import("pages/Dashboardmain"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboardmain" element={<Dashboardmain />} />
          <Route path="/createbill" element={<CreateBill />} />
          <Route path="/viewbill" element={<ViewBill />} />
          <Route path="/viewbillone" element={<ViewBillOne />} />
          <Route path="/editbill" element={<EditBill />} />
          <Route path="/editalert" element={<EditAlert />} />
          <Route
            path="/addproducedproducts"
            element={<AddProducedProducts />}
          />
          <Route
            path="/addfarmproductsthree"
            element={<AddFarmProductsThree />}
          />
          <Route path="/editproduct" element={<EditProduct />} />
          <Route path="/editproductone" element={<EditProductOne />} />
          <Route path="/addfarmproductstwo" element={<AddFarmProductsTwo />} />
          <Route path="/addfarmproductsone" element={<AddFarmProductsOne />} />
          <Route path="/addfarmproducts" element={<AddFarmProducts />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

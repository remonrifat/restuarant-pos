import { createBrowserRouter } from "react-router-dom";
import Home from "../frontend/pages/Home/Home";
import InvoiceList from "../frontend/pages/InvoiceList/InvoiceList";
import Inventory from "../frontend/pages/Inventory/Inventory";
import ProductInvoiceDetails from "../frontend/pages/ProductInvoice/ProductInvoiceDetails";
import OrderList from "../frontend/pages/OrderList/OrderList";
import Dashboard from "../frontend/pages/Dashboard/Dashboard";
import SalesReceipt from "../frontend/pages/SalesReceipt/SalesReceipt";
import Login from "../frontend/pages/Auth/Login";
import SignupPage from "../frontend/pages/Auth/Signup";
import OTPVerification from "../frontend/pages/Auth/OTPVerification";
import ResetPassword from "../frontend/pages/Auth/ResetPassword";

export const routes = createBrowserRouter([
// ======= MAIN ROUTES ======= */}
{
    path: "/",
    element: <Home />,
},
{
    path: "/home",
    element: <Home />,
},
{
    path: "/dashboard",
    element: <Dashboard />,
},
{
    path: "/InvoiceList",
    element: <InvoiceList />,
},
{
    path: "/OrderList",
    element: <OrderList />,
},
{
    path: "/SalesReceipt",
    element: <SalesReceipt />,
},
{
    path: "/Inventory",
    element: <Inventory />,
},
{
    path: "/Login",
    element: <Login />,
},
{
    path: "/SignUp",
    element: <SignupPage />,
},
{
    path: "/verify-otp",
    element: <OTPVerification />,
},
{
    path: "/reset-password",
    element: <ResetPassword />,
},
{
    path: "/ProductInvoiceDetails",
    element: <ProductInvoiceDetails />,
},

// {
//   path: "/",
//   element: <MainLayout />,
// //   errorElement: <DisplayError />,
//   children: [
//     // --- home ---
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/home",
//       element: <Home />,
//     },

//   ],
// },

]);
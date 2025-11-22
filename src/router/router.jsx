import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout></RootLayout>,
      children:[
        {
            index:true,
            element:<Home></Home>
        }
      ]
    },
    {
        path:"/",
        Component:AuthLayout,
        children:[
            {
                path:"login",
                element:<Login></Login>
            }
        ]
    }
])

export default router
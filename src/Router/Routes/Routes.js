import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkiut from "../../Pages/CheckOuts/Checkiut";
import Home from "../../Pages/Home/Home/Home";
import Loginjs from "../../Pages/Login/Loginjs";
import Order from "../../Pages/orders/Order";
import SIgnUp from "../../Pages/SIgnUp/SIgnUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Loginjs></Loginjs>
        },
        {
          path:'/signup',
          element:<SIgnUp></SIgnUp>
        },
        {
          path:'/checkout/:id',
          element: <PrivateRouter><Checkiut></Checkiut></PrivateRouter>,
          loader: ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/orders',
          element:<PrivateRouter><Order></Order></PrivateRouter>
        }
      ]
    }
  ])


  export default router;
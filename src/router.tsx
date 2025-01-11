import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sneaker from "./pages/Sneaker";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />
},
{
    path: "/sneaker/:id",
    element: <Sneaker />
},
{
    path: "*",
    element: <NotFound />
},

]);


export default router;

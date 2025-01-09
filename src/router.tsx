import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SneakerPage from "./pages/SneakerPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />
},
{
    path: "/sneaker/:id",
    element: <SneakerPage />
},
{
    path: "*",
    element: <NotFound />
},

]);


export default router;

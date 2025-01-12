import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sneaker from "./pages/Sneaker";
import NotFound from "./pages/NotFound";
import Page1 from "./components/Сarousel/Page1";
import Page2 from "./components/Сarousel/Page2";
import Page3 from "./components/Сarousel/Page3";
import Page4 from "./components/Сarousel/Page4";

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

{   path: "/page1",
    element: <Page1/>
},

{
    path: "/page2",
    element: <Page2/>
},

{
    path: "/page3",
    element: <Page3/>
},

{
    path: "/page4",
    element: <Page4/>
}

]);


export default router;

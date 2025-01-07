import { createBrowserRouter } from "react-router-dom";
import Sneaker from "./components/pages/Sneaker";

const router = createBrowserRouter([
    {
    path: "/sneaker",
    element: <Sneaker />
}

]);


export default router;

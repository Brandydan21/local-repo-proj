import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddPackage from "./pages/AddPackage";
import Root from "./pages/Root";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, // nav and footer 
    children: [
      { index: true, Component: Home }, // home page
      { path: "pypi", Component: AddPackage }, // pypi install page
    ],
  },
]);

export default router;

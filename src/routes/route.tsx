import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
        {
            
        }
    ]
  },
]);

export default routes;

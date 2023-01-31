import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Index from "../pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "explorar",
        element: <div>explorar</div>,
      },
      {
        path: "reels",
        element: <div>Reels</div>,
      },
      {
        path: "direct/:path",
        element: <div>Mensajes</div>,
      },
      {
        path: "perfil",
        element: <div>Perfil</div>,
      },
    ],
  },
]);

function RenderRouterProvider() {
  return <RouterProvider router={router} />;
}

export default RenderRouterProvider;

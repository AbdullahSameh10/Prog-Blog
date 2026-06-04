import { createBrowserRouter, RouterProvider } from "react-router";
import { Details, Error, Home } from "@Components/Routers";
import { Layout } from "@Layouts/index";
import { DataProvider } from "./DataProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DataProvider>
        <Layout />
      </DataProvider>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: ":id/:slug",
            element: <Details />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

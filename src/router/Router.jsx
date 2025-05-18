import { createBrowserRouter} from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import CoffeeDetailsCard from "../Components/CoffeeDetailsCard/CoffeeDetailsCard";
import Error from "../Components/Error/Error";
import UpdateCoffeeForm from "../Components/UpdateCoffee/UpdateCoffee";
import Blog from "../Components/Blog/Blog";
import Loading from "../Components/Loading/Loading";
import Users from "../Components/Users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("https://espresso-emporium-server-one-iota.vercel.app/coffees"),
        hydrateFallbackElement: <Loading></Loading>,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "add-coffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "coffee-details/:id",
        loader: ({ params }) =>
          fetch(`https://espresso-emporium-server-one-iota.vercel.app/coffees/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: <CoffeeDetailsCard></CoffeeDetailsCard>,
      },
      {
        path: "update-coffee/:id",
        loader: async ({ params }) => {
          const res = await fetch(`https://espresso-emporium-server-one-iota.vercel.app/coffees/${params.id}`);
          if (!res.ok) {
            throw new Response("Failed to load coffee data", {
              status: res.status,
            });
          }
          return res.json();
        },
        element: <UpdateCoffeeForm />,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path: 'users',
        loader: () => fetch('https://espresso-emporium-server-one-iota.vercel.app/users'),
        hydrateFallbackElement: <Loading></Loading>,
        element:<Users></Users>
      }
    ],
  },
]);

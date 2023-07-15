import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import { NotFound } from "../pages/NotFound";
import Home from "../pages/Home";
import Books from "../ui/books";
import BookDetails from "../pages/BookDetails";
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            index: true,
            element: <Home />,
          },
          {
            path: '/books',
            element: <Books />,
          },
          {
            path: '/book-details/:id',
            element: <BookDetails />,
          },
          
      ]
    },
    {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
  ]);
 
  
  
  
  export default routes
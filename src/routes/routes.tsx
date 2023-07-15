import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import { NotFound } from "../pages/NotFound";
import Home from "../pages/Home";
import Books from "../ui/Books";
import BookDetails from "../pages/BookDetails";
import AllBooks from "../pages/AllBooks";
import AddNewBook from "../pages/AddNewBook";
  
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
        path: '/all-books',
        element: <AllBooks />,
      },
    {
        path: '/add-book',
        element: <AddNewBook />,
      },
    {
        path: '/sign-in',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
  ]);
 
  
  
  
  export default routes
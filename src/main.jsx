import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DataProvider from './Components/ContexApi/DataProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Root from './Components/Root/Root';
import Login from './Components/Firebase/SignIn&SignOut/Login';
import Register from './Components/Firebase/SignIn&SignOut/Registar';
import Home from './Components/HomePage/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AllBooks from './Components/PrivateRoute/PrivateRouteComponents/AllBooks';
import AddBook from './Components/PrivateRoute/PrivateRouteComponents/AddBook';
import BorrowedBooks from './Components/PrivateRoute/PrivateRouteComponents/BorrowedBooks';
import UpdateBook from './Components/PrivateRoute/PrivateRouteComponents/UpdateBook';
import BooksByCategory from './Components/Routes/BooksByCategory';
import BookDetails from './Components/PrivateRoute/PrivateRouteComponents/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />
      },
      {
        path: "/books/:category",
        element: <BooksByCategory/>
      },
      {
        path: "/all-books",
        element: <PrivateRoute><AllBooks/></PrivateRoute>
      },
      {
        path: "/add-book",
        element: <PrivateRoute><AddBook/></PrivateRoute>
      },
      {
        path: "/borrowed-books",
        element: <PrivateRoute><BorrowedBooks/></PrivateRoute>
      },
      {
        path: "/update-book/:id",
        element: <PrivateRoute><UpdateBook/></PrivateRoute>
      },
      {
        path: "/book/:id",
        element: <PrivateRoute><BookDetails/></PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)

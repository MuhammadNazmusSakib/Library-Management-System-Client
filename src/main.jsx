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
import ErrorPage from './ErrorPage/ErrorPage';
import AboutLibrary from './Components/HomePage/AboutLibrary';
import JoinPage from './Components/HomePage/JoinPage';
import Profile from './Components/PrivateRoute/Profile/Profile';
import UpdateBooks from './Components/PrivateRoute/PrivateRouteComponents/UpdateBooks';
import Contact from './Components/Routes/Contact';
import DiscoverProgramsList from './Components/Routes/DiscoverProgramsList';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        element: <BooksByCategory />
      },
      {
        path: "/about-library",
        element: <AboutLibrary />
      },
      {
        path: "/join-book-club",
        element: <JoinPage />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/discover-programs",
        element: <DiscoverProgramsList />
      },
      {
        path: "my-profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
        children: [
          {
            path: "all-books",
            element: <AllBooks />
          },
          {
            path: "add-book",
            element: <AddBook />,
          },
          {
            path: "update-books",
            element: <UpdateBooks />
          },
          {
            path: "borrowed-books",
            element: <BorrowedBooks />,
          },
        ]
      },

      {
        path: "/update-book/:id",
        element: <PrivateRoute><UpdateBook /></PrivateRoute>
      },
      {
        path: "/book/:id",
        element: <PrivateRoute><BookDetails /></PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </DataProvider>
  </StrictMode>,
)

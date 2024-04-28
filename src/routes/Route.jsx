import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ErrorPage from '../components/ErrorPage';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import AddSpot from '../pages/AddSpot';
import Privateroute from '../components/Privateroute/Privateroute';


//import PrivateRoute from '../components/Privateroute/PrivateRoute';

export const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        loader:() => fetch('http://localhost:5000/spots'),
        element: <Home />,
      },
      {
        path: '/login',
        element: <LogIn />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/addspot',
        element:< Privateroute>
        <AddSpot />,
        </Privateroute>
        
      },
      {
        path: '/viewdetails',
        element:< Privateroute>
        <AddSpot />,
        </Privateroute>
        
      },
      
      
      
     

      



    ]
  }


]);
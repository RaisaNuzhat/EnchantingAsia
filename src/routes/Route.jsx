import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ErrorPage from '../components/ErrorPage';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import AddSpot from '../pages/AddSpot';
import Privateroute from '../components/Privateroute/Privateroute';
import MyList from '../pages/MyList';
import ViewDetails from '../pages/ViewDetails';
import AllTouristSpots from '../pages/AllTouristSpots';
import Update from '../pages/Update';


//import PrivateRoute from '../components/Privateroute/PrivateRoute';

export const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        loader:() => fetch('https://assignment-10-server-psi-rouge.vercel.app/spots'),
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
        path: '/viewdetails/:id',
        element:< Privateroute>
        <ViewDetails />
        </Privateroute>,
        loader:({params}) => fetch(`https://assignment-10-server-psi-rouge.vercel.app/spots/${params.id}`),
       
        
      },
      {
        path: '/mylist',
        element:< Privateroute>
        <MyList />
        </Privateroute>,
        
      },
      {
        path: '/update/:id',
        element:< Privateroute>
        <Update />
        </Privateroute>,
        loader:({params}) => fetch(`https://assignment-10-server-psi-rouge.vercel.app/spots/${params.id}`),
      },
      {
        path: '/alltouristspot',
        loader:() => fetch('https://assignment-10-server-psi-rouge.vercel.app/spots'),
        element:
        <AllTouristSpots />,
        
        
      },
    ]
  }


]);
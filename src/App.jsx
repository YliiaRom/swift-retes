import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Heading from './components/Heading/Heading';
import Home from './pages/Home';
import Rates from './pages/Rates';
import Layoute from './components/Header/Header';
import { useEffect } from 'react';
import { getUserInfo } from './service/opencagedataApi';

export const App = () => {
  useEffect(() => {
    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      const currentyData = getUserInfo(crd);
      console.log(currentyData);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);
  return (
    <>
      <RouterProvider
        router={router}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      />
      <Heading title="Just do it!" />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layoute />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/rates', element: <Rates /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

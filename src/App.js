import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import About from './Components/About/About';
import GrandPa from './Components/GrandPa/GrandPa';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',                /*root a thakbe Main component*/
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirt.json'),
          element: <Home></Home>,
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },

        {
          path: '/grandpa',
          element: <GrandPa></GrandPa>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>   {/* Here, router={router} is a props. */}
    </div> 
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from "../theme.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movies from "./pages/movies/Movies.jsx";
import Shows from "./pages/shows/Shows.jsx";
import Search from "./pages/search/Search.jsx";
import DetailsPage from "../src/pages/DetailsPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/movies",
        element: <Movies/>,
      },
      {
        path: "/shows",
        element: <Shows/>,
      },
      {
        path: "/search",
        element: <Search/>,
      },
      {
        path: "/:type/:id",
        element: <DetailsPage />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,

)

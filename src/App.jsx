
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Notfound from './components/notfound/Notfound';

function App() {


  const router = createBrowserRouter([
    {path:"",element:<Layout/> ,children:[
      {index:true,element: <Home/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"menu",element:<Menu/>},
    ]},
    {path:"*",element:<Notfound/>}
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

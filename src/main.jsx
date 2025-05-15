import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './components/MainLayout.jsx'
import Phones from './components/Phones.jsx'
import SinglePhone from './components/SinglePhone.jsx'
const router = createBrowserRouter([
{
  path:'/',
  Component:MainLayout,
  children:[
    {
      path:"/phones",
      Component:Phones,
      loader:()=> fetch("http://localhost:5000/phones"),
    },
    {
      path:'/phone/:id',
      Component:SinglePhone,
      loader:({params})=> fetch(`http://localhost:5000/phones/${params.id}`),
    }
  ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './components/MainLayout.jsx'
import Phones from './components/Phones.jsx'
const router = createBrowserRouter([
{
  path:'/',
  Component:MainLayout,
  children:[
    {
      path:"/phones",
      Component:Phones,
    }
  ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

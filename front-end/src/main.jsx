import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Clients from './components/Clients.jsx'
import Managers from './components/Managers.jsx'
import Superviseurs from './components/Superviseurs.jsx'
import Agents from './components/Agents.jsx'


const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/clients',
    element:<Clients/>,
  },
  {
    path:'/managers',
    element:<Managers/>,
  },
  {
    path:'/superviseurs',
    element:<Superviseurs/>,
  },
  {
    path:'/agents',
    element:<Agents/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Buscador from './Buscador.jsx'
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Buscador/>
    <App/>
    <Navbar/>
   <Card/> 
  </React.StrictMode>,
)





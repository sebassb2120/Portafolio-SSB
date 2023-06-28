import React from 'react'
import ReactDOM from 'react-dom'

//importacion botstrap
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// importacion de rutas
import { BrowserRouter } from "react-router-dom"
import {Rutas} from "./Routes/Rutas"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rutas/>
    </BrowserRouter>
  </React.StrictMode>,
)

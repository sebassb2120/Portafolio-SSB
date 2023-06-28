import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"

export function Rutas() {
  return (

    
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}
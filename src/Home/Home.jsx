import React from "react"
import "./Home.css"
import {Header} from "../Component/Header/Header"
import {Nav} from "../Component/Nav/Nav"
import {About} from "../Component/About/About"
import {Experience} from "../Component/Experience/Experience"
//import {Services} from "../Component/Services/Services"
import {Portafolio} from "../Component/Portafolio/Portafolio"
//import {Testimonios} from "../Component/Testimonios/Testimonios"
import {Contacto} from "../Component/Contact/Contacto"
import {Footer} from "../Component/Footer/Footer"

export function Home(){

    return(
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portafolio/>
            <Contacto/>
            <Footer/>  
        </>
    )
}
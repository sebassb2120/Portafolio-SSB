import React from "react"
import"./Nav.css"
import { useState } from "react"

export function Nav(){

    const [activeNav, setActiveNav] = useState("#")

    return(
        <>
            <nav>
                <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><i class="bi bi-house"></i></a>
                <a href="#about" onClick={() => setActiveNav("about")} className={activeNav === 'about' ? 'active' : ''}><i class="bi bi-file-earmark-person"></i></a>
                <a href="#experience" onClick={() => setActiveNav("experience")} className={activeNav === 'experience' ? 'active' : ''}><i class="bi bi-journal-bookmark"></i></a>
                <a href="#portafolio" onClick={() => setActiveNav("portafolio")} className={activeNav === 'portafolio' ? 'active' : ''}><i class="bi bi-briefcase"></i></a>
                <a href="#contact" onClick={() => setActiveNav("contact")} className={activeNav === 'contact' ? 'active' : ''}><i class="bi bi-chat-left-dots"></i></a>
            </nav>
        </>
    )
}
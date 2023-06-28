import".//Footer.css"

export function Footer(){
    return(
        <>
            <footer>
                <a href="#" className="footer_logo">SSB</a>

                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portafolio">Portafolio</a></li>
                    <li><a href="#testimonio">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer_socials">
                    <a href="https://github.com/sebassb2120"><i class="bi bi-linkedin"></i></a>
                    <a href="https://www.linkedin.com/in/sebastian-saldarriaga-bustamante-1294b7236/"><i class="bi bi-github"></i></a>
                </div>
                
                <div className="footer_copyright">
                    <small>&copy; Sebastian Saldarriaga Bustamante. All rigts reserved</small>
                </div>
            </footer>
        </>
    )
}
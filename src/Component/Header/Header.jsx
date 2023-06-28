import"./Headers.css"
import ME from "../../assets/img/porta.jpg"
import { CTA } from "./CTA.JSX"
import { HeaderSocials } from "./HeaderSocials"

export function Header(){
    return(
        <>
            <header>
                <div className="container header__container">
                    <h5>Hello I'm</h5>
                    <h1>Sebastian Saldarriaga</h1>
                    <h5 className="text-light">software developer technician </h5>
                    <CTA/>
                    <HeaderSocials/> 
        
                    <div className="me">
                        <img src={ME} alt="" />
                    </div>

                    <a href="#contact" className="scroll_dow">Scrool Down</a>
                    


                </div>
            </header>
            
            
        </>
    )
}
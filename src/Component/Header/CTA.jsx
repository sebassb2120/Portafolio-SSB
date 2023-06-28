
 import cv from "../../assets/img/cv.pdf"

export function CTA(){
    return(
        <>
            <div className="cta">
                <a href={cv} download className="btn">Downland CV</a>
                <a href="#contact" className="btn btn-primary">Les't Talk</a> 
            </div>
        </>
    )
}
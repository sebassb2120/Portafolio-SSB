import "./Portafolio.css";

export function Portafolio() {
  let portafolios = [

        {
            id:"1",
            NombrePor:"Portafolio.",
            ImgPort: "https://firebasestorage.googleapis.com/v0/b/fibona-bbfed.appspot.com/o/portafolio.png?alt=media&token=9112556e-b5e8-45dd-af47-5fc2001700a3",
            urlPor:"https://github.com/sebassb2120/Portafolio-SSB.git"
        },
        {
            id:"2",
            NombrePor:"Music WebSite.",
            ImgPort: "https://firebasestorage.googleapis.com/v0/b/musicssb-c8514.appspot.com/o/binilo.jpg?alt=media&token=1ac94e7a-fcc5-456d-9af2-9cef5bbececa",
            urlPor:"https://github.com/sebassb2120/Spotify-React"
        }, 
        {
            id:"3",
            NombrePor:"Barber Shop Web.",
            ImgPort: "https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/desktop-wallpaper-barber-shop.jpg?alt=media&token=a03b62c4-47a1-4e04-b669-530adb2e0f31",
            urlPor:""
        }, 
        {
            id:"4",
            NombrePor:"Fibonacci Web.",
            ImgPort: "https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/logo%20entero.png?alt=media&token=cd49c1bc-867a-4e67-b5f7-fd002ded4366",
            urlPor:"https://github.com/sebassb2120/Fibonacci"

        }, 
        {
            id:"5",
            NombrePor:"Tienda de Sneakers.",
            ImgPort: "https://firebasestorage.googleapis.com/v0/b/ssbtienda.appspot.com/o/Captura%20de%20pantalla%20(1).png?alt=media&token=12aab7fd-17ac-4d1b-8647-61d6463b9434",
            urlPor:"https://github.com/sebassb2120/tienda-numero2"

        },
       
    ];

  return (
    <>
      <section id="portafolio">
        <h5>My Recent Work</h5>
        <h2>Portafolio</h2>
      </section>

      <div className="container portafolio_container">
            {
                portafolios.map(function(portafolio){

                    return(
                        <article className="portafolio_item">
                            <div className="portafolio_item-image">
                                <img src={portafolio.ImgPort} alt="" />
                            </div>
                            <h3>{portafolio.NombrePor}</h3>
                            <div className="portafolio_item-cta">
                                <a href={portafolio.urlPor} className="btn">Github</a>
                            </div>
                        </article>
                    )
                })
            }
      </div>
    </>
  );
}

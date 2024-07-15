import './Hero.css'
import fotoPerfil from '/img/CV.jpeg'

{/* <!-- Seccion Hero --> */}

const Hero=()=>{
    return(
        <section className="hero" id="hero">
            <div>
                <h1>Hola, soy Adrian <br></br>
                Programador y diseñador web</h1>
                <p>Ingeniero químico con marcado perfil analítico y formación de doctorado. <br></br>
                Ofrezco servicios en el area de ingenieria, desarrollo del backend de aplicaciones y diseño de paginas web.
                </p>

            <div className="contenedor-dos-botones">
                <a href="#contacto">
                    <button className="big-button">Contratarme</button>
                </a>
                
                <a href="#sobre-mi">
                    <button className="big-button">Sobre mi</button>
                </a>
                </div>
            </div>

            <img className="foto-perfil" src={fotoPerfil} alt="rostro del desarrollador"></img>
        </section>
    )
}

export default Hero
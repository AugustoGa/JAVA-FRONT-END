import React from 'react';
import codoacodo from "../img/codoacodo.png";
import ba3 from "../img/ba3.jpg";
import ba2 from "../img/ba2.jpg";
import ba1 from "../img/ba1.jpg"
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function NavBar() {

    const [expanded, setExpanded] = useState(false);

    return (
        <div class="col-12">
        
        <div class="row-1">
            
            <nav class="navbar navbar-expand-lg bg-dark fixed-top">
            <div class="container">
                <img
                        alt="Logo"
                        src={codoacodo}
                        height="50"
                        className="d-inline-block align-text-top"
                    />
                <h1 class="navbar-brand text-white">Conferencia Bs. As.</h1>
                <div class="collapse navbar-collapse">
                <div class="navbar-nav ms-auto">
                    <a className="nav-link text-white" href="#conferencia" >La conferencia</a>
                    <a className="nav-link text-white" href="#oradores" >Oradores</a>
                    <a className="nav-link text-white" href="#lugarYfecha" >Lugar y fecha</a>
                    <a className="nav-link text-white" href="#conviertete" >Conviertete en orador</a>
                    <a className="nav-link disabled text-success fw-bolder" aria-disabled="true">Comprar tickets</a>
                </div>
                </div>
            </div>
            </nav>
        </div>
        <div class="row-3">
            
            <div class="col">

            <div id="conferencia" class="carousel slide">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#conferencia" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#conferencia" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#conferencia" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">

                <div class="carousel-item active">
                    <img
                        alt="foto_buenos_aires_1"
                        src={ba1}
                        className="d-block w-100"
                        style={{filter: 'brightness(0.3)'}}
                    />
                    <div class="carousel-caption d-none d-md-block">
                    <h3>Conferencia Bs. As.</h3>
                    <p>Bs. As. llega por primera vez a Argentina. Un evento para compartir con nuestra comunidad el conocimiento y experiencia de los expertos que estan creando el futuro de internet. Ven a conocer a miembros del evento, a otros estudiantes de Codo a Codo y a los oradores de primer nivel que tenemos para ti. Te esperamos!</p>
                    <button type="button" class="btn btn-outline-light">Quiero ser orador</button>
                    <button type="button" class="btn btn-success">Comprar tickets</button>
                    </div>
                </div>

                <div class="carousel-item">
                    <img
                        alt="foto_buenos_aires_2"
                        src={ba2}
                        className="d-block w-100"
                        style={{filter: 'brightness(0.3)' }}
                    />
                    <div class="carousel-caption d-none d-md-block">
                    <h3>Conferencia Bs. As.</h3>
                    <p>Bs. As. llega por primera vez a Argentina. Un evento para compartir con nuestra comunidad el conocimiento y experiencia de los expertos que estan creando el futuro de internet. Ven a conocer a miembros del evento, a otros estudiantes de Codo a Codo y a los oradores de primer nivel que tenemos para ti. Te esperamos!</p>
                    <button type="button" class="btn btn-outline-light">Quiero ser orador</button>
                    <button type="button" class="btn btn-success">Comprar tickets</button>
                    <button type="button" class="btn btn-success">Comprar tickets</button>
                    </div>
                </div>
                <div class="carousel-item">
                <img
                    alt="foto_buenos_aires_3"
                    src={ba3}
                    className="d-block w-100"
                    style={{ filter: 'brightness(0.3)' }}
                />
                    <div class="carousel-caption d-none d-md-block">
                    <h3>Conferencia Bs. As.</h3>
                    <p>Bs. As. llega por primera vez a Argentina. Un evento para compartir con nuestra comunidad el conocimiento y experiencia de los expertos que estan creando el futuro de internet. Ven a conocer a miembros del evento, a otros estudiantes de Codo a Codo y a los oradores de primer nivel que tenemos para ti. Te esperamos!</p>
                    <button type="button" class="btn btn-outline-light">Quiero ser orador</button>
                    <Nav.Link as={Link} to="/Compra">Comprar tickets</Nav.Link>
                    <button onClick={() => setExpanded(false)} as={Link} to="/Compra" type="button" class="btn btn-success">Comprar tickets</button>
                </div>
                </div>
                </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#conferencia" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#conferencia" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        </div>
        </div>
    )
}

import React from 'react'
import honolulu from "../img/honolulu.jpg"
import bill from "../img/bill.jpg"
import ada from "../img/ada.jpeg"
import steve from "../img/steve.jpg"


export default function Container() {
    return (
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
                
                    
                    <div class="carousel-caption d-none d-md-block">
                    <h3>Conferencia Bs. As.</h3>
                    <p>Bs. As. llega por primera vez a Argentina. Un evento para compartir con nuestra comunidad el conocimiento y experiencia de los expertos que estan creando el futuro de internet. Ven a conocer a miembros del evento, a otros estudiantes de Codo a Codo y a los oradores de primer nivel que tenemos para ti. Te esperamos!</p>
                    <button type="button" class="btn btn-outline-light">Quiero ser orador</button>
                    <button type="button" class="btn btn-success">Comprar tickets</button>
                    </div>
                </div>

                <div class="carousel-item">
                    
                    <div class="carousel-caption d-none d-md-block">
                    <h3>Conferencia Bs. As.</h3>
                    <p>Bs. As. llega por primera vez a Argentina. Un evento para compartir con nuestra comunidad el conocimiento y experiencia de los expertos que estan creando el futuro de internet. Ven a conocer a miembros del evento, a otros estudiantes de Codo a Codo y a los oradores de primer nivel que tenemos para ti. Te esperamos!</p>
                    <button type="button" class="btn btn-outline-light">Quiero ser orador</button>
                    <button type="button" class="btn btn-success">Comprar tickets</button>
                    </div>
                </div>
                <div class="carousel-item">
                    
                    <div class="carousel-caption d-none d-md-block">
                    <h3>Conferencia Bs. As.</h3>
                    <p>Bs. As. llega por primera vez a Argentina. Un evento para compartir con nuestra comunidad el conocimiento y experiencia de los expertos que estan creando el futuro de internet. Ven a conocer a miembros del evento, a otros estudiantes de Codo a Codo y a los oradores de primer nivel que tenemos para ti. Te esperamos!</p>
                    <button type="button" class="btn btn-outline-light">Quiero ser orador</button>
                    <button type="button" class="btn btn-success">Comprar tickets</button>
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
        <div class="row-3 mt-4">
        <div class="col">            
            
            <div class="text-center">
                <p class="fs-6 fw-light">CONOCE A LOS</p>
                <p class="fs-2 fw-normal">ORADORES</p>
            </div>
            
            <div class="container" id="oradores">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                    <img
                        alt=""
                        src={steve}
                        className="d-inline-block align-top"
                        />
                    <div class="card-body">
                        <span class="badge text-bg-warning mb-2">Javascript</span>
                        <span class="badge text-bg-info mb-2">React</span>
                        <h5 class="card-title">Steve Jobs</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugiat atque ipsa reprehenderit iusto blanditiis fugit pariatur quisquam quibusdam, cumque illo placeat. Rerum nesciunt quis atque tempore laboriosam? Error, velit?​</p>
                    </div>
                </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <img
                        alt=""
                        src={bill}
                        className="d-inline-block align-top"
                        />
                    <div class="card-body">
                        <span class="badge text-bg-warning mb-2">Javascript</span>
                        <span class="badge text-bg-info mb-2">React</span>
                        <h5 class="card-title">Bill Gates</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugiat atque ipsa reprehenderit iusto blanditiis fugit pariatur quisquam quibusdam, cumque illo placeat. Rerum nesciunt quis atque tempore laboriosam? Error, velit?</p>
                    </div>
                </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <img
                        alt=""
                        src={ada}
                        className="d-inline-block align-top"
                    />
                    <div class="card-body">
                        <span class="badge text-bg-secondary mb-2">Negocios</span>
                        <span class="badge text-bg-danger mb-2">Startups</span>
                        <h5 class="card-title">Ada Lovelace</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugiat atque ipsa reprehenderit iusto blanditiis fugit pariatur quisquam quibusdam, cumque illo placeat. Rerum nesciunt quis atque tempore laboriosam? Error, velit?</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="row mt-3" id="lugarYfecha">
            <div class="col-md-6">
            <img
            alt=""
            src={honolulu}
            width="100%"
            className="d-inline-block align-top"
        />
            </div>
                <div class="col-md-6 bg-dark p-4">
                <h1 class="text-white">Bs. As. - Octubre</h1>
                <p class="text-white">Buenos Aires es la provincia y localidad más grande del estado de Argentina, en los Estados Unidos. Honolulu es la más sureña de entre las principales ciudades estadounidenses. Aunque el nombre de Honolulu se refiere al área urbana en la costa sureste de la isla de Oahu, la ciudad y el condado de Honolulu han formado una ciudad condado consolidada que cubre toda la ciudad (aproximadamente 600km² de superficie).</p>
                <button type="button" class="btn btn-outline-light">Conocé más</button>
            </div>
        </div>
        
        <div class="row-2 mt-4">
            <div class="col">
            <div class="container">
                <div class="text-center">
                <p class="fs-6 fw-light">CONVIÉRTETE EN</p>
                <p class="fs-2 fw-normal">ORADOR</p>
                <p class="fs-6 fw-light">Anótate como orador para dar una <span>charla ignite</span>. Cuéntanos de qué quieres hablar</p>
                </div>
                <form action="">
                <div class="row">
                    <div class="col">
                    <input type="text" class="form-control" placeholder="Nombre" aria-label="nombre"></input>
                    </div>
                    <div class="col">
                    <input type="text" class="form-control" placeholder="Apellido" aria-label="apellido"></input>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                    <textarea class="form-control" placeholder="¿Sobre qué quieres hablar?" aria-label="tematica"></textarea>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                    <div class="d-grid">
                        <button type="submit" class="btn btn-success mb-3">Enviar</button>
                    </div>
                    </div>
                </div>
                </form>
            
            </div>
            </div>
        </div>
        </div>
    )
}

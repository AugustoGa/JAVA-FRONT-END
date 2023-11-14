import React from 'react'

export default function Compra() {
    return (
<>
        <div class="row-3 mt-4">
        <div class="col">
            <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card text-center">
                    <div class="card-body">
                        <h2 class="card-title">Estudiante</h2>
                        <h5 class="card-text">Tiene un descuento​</h5>
                        <h3>80%</h3>
                        <span>*Presentar documentacion</span>
                    </div>
                </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center">
                    <div class="card-body">
                        <h2 class="card-title">Trainer</h2>
                        <h5 class="card-text">Tiene un descuento</h5>
                        <h3>50%</h3>
                        <span>*Presentar documentacion</span>
                    </div>
                </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center">
                    <div class="card-body">
                        <h2 class="card-title">Junior</h2>
                        <h5 class="card-text">Tiene un descuento</h5>
                        <h3>15%</h3>
                        <span>*Presentar documentacion</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>




        <div class="row-2 mt-4">
        <div class="col">
        <div class="container">
            <div class="text-center">
            <p class="fs-6 fw-light">VENTA</p>
            <h1 class="fs-2 fw-normal">VENTA DE TIKET $200</h1>
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
                <input class="form-control" placeholder="Correo" aria-label="Correo"></input>
                </div>
            </div>

            <div class="row mt-3">
            <div class="col">
                <input type="text" class="form-control" placeholder="Cantidad" aria-label="Cantidad"></input>
                </div>
                <div class="col">
                    <select class="form-control">
                        <option>Estudiante</option>
                        <option>Junior</option>
                        <option>Trainer</option>
                    </select>
                </div>
                </div>
                <div class="row mt-3">
                <div class="col">
                <input class="form-control" placeholder="Total a pagar:$" aria-label="Total" style={{ background: 'lightblue' }}></input>
                </div>
            </div>
                
            <div class="row mt-3">
            <div class="col">
                <input type="text" class="form-control" placeholder="Borrar" aria-label="Borrar"></input>
                </div>
                <div class="col">
                <input type="text" class="form-control" placeholder="Resumen" aria-label="Resumen"></input>
                </div>
                </div>

            <div class="row mt-3">
                <div class="col">
                <div class="d-grid">
                    <button type="submit" class="btn btn-success btn-lg">Enviar</button>
                    <button type="submit" class="btn btn-success btn-lg">Enviar</button>
                </div>
                </div>
            </div>
            </form>
            </div>
            </div>
        </div>
        </>
    )
}

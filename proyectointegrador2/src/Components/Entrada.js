import React from 'react';
import {data} from '../data';



export default function Entrada({allEntradas,setAllEntradas}) {
    const onAddEntradas = (datos) =>{
        console.log("add")


    };

  return (
    <>
        <div class="container">
            {data.map(datos =>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card text-center">
                            <div class="card-body" key={datos.id}>
                                <h2 class="card-title">{datos.name}</h2>
                                <h5 class="card-text">Tiene un descuento​</h5>
                                <h3>{datos.offer}</h3>
                                <h3>{datos.price}</h3>
                                <span>*Presentar documentacion</span>
                                <button onClick={()=>onAddEntradas(datos)} type="submit" class="btn btn-success btn-lg">Comprar</button>
                            </div>
                            </div>
                        </div> 
                    </div> 
                )}
        </div>
    </>
  )
}

import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    //crear State de citas
    const[cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    
    // State validaciones
    const [error, actualizarError] = useState(false)

    //Funcion que se ejecuta cada usuario escribe en el input

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value 
        })
    }
    // Extraer valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;
    
    // enviar formulario
    const submitCita = e => {
        e.preventDefault();
        
        // Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }

        // Eliminar el mensaje previo
        actualizarError(false);
        // Asignar ID
        cita.id = uuidv4();


        // Crear Cita
        crearCita(cita);

        //Reiniciar Form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''

        });
    }

    return (  
        <Fragment>
            <h2>Crear Cita</h2>
            <div class="conteiner-fluid px-5 ml-5">
            { error ? <p className="alert alert-warning">Todos los campos son requeridos! </p> :null}
            </div>
            <form onSubmit={submitCita}>
                <div class="conteiner-fluid px-5 ml-5">
                    
                <label class="">Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    class="w-100 mb-4"
                    placeholder="Nombre Mascota"  
                    onChange={actualizarState} 
                    value={mascota} 
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    class="w-100 mb-4"
                    placeholder="Nombre Propietario"    
                    onChange={actualizarState} 
                    value={propietario}
                />
                <label>Fecha </label>
                 <input
                    type="date"
                    name="fecha"
                    class="w-100 mb-4"
                    onChange={actualizarState} 
                    value={fecha}
                        
                />
                <label>Hora </label>
                 <input
                    type="time"
                    name="hora"
                    class="w-100 mb-4"
                    onChange={actualizarState} 
                    value={hora}
                        
                />
                <label>Síntomas</label>
                <textarea
                     class="w-100 mb-4"
                    name="sintomas"
                    onChange={actualizarState} 
                    value={sintomas}
                ></textarea>
                    
                <button
                    type="submit"
                    class="btn btn-primary w-100"
                >Agregar Cita</button>
            </div>
            
            </form>

        </Fragment>
        
    );
}
 
export default Formulario;
import React from 'react';

const Cita = ({cita}) => (
    <div class="card p-3 mb-3">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button class="btn btn-danger">
            Eliminar Cita &times;
        </button>
    </div>
);

export default Cita;
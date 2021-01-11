import React , {Fragment, useState} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // Arreglo de citas
  const [citas,guardarCitas] = useState([]);

  // Función que tome las cictas actuales y agrege la nueva
  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  return (
     <Fragment>
        <h1>Administrador de Pacientes </h1>

        <div class="conteiner">
          <div class="row">
            <div class="col-md-12">
              <div class="row">     
                <div class="col-md-6 px-5">

                    <Formulario 
                      crearCita={crearCita}
                    />
                </div>
                <div class="col-md-6 px-5">
                    <h2>Administra tus citas</h2>
                    {citas.map(cita => (
                      <Cita
                        key={cita.id}
                        cita={cita}
                      
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>

        </div>
    </Fragment>
  );
}

export default App;

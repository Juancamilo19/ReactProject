import React from 'react';
import PropTypes from 'prop-types';

// let estudiante = {
//     nombre: "Juan",
//     edad: 12

// }
const ComponentePrueba = ({nombre, edad, sexo}) => (
    <>
    <div className="card" style={ {width: '18rem'}}>
    <div className="card-body">
        <h5 className="card-title">{nombre ? nombre:"nombre no asignado"}</h5>
    <p className="card-text">Edad:{edad}</p>
    <p className="card-text">Sexo:{sexo}</p>
  </div>
</div>
    </>
);

ComponentePrueba.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    sexo: PropTypes.string
}

ComponentePrueba.defaultProps = {
    nombre: "nombre no asignado",
    edad:0
}

export default ComponentePrueba;
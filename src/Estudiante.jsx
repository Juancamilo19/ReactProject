import React from 'react';
import PropTypes from 'prop-types';

const Estudiante = ({nombre, edad, sexo}) => (
    <>
    <div className="card" style={ {width: '18rem'}}>
    <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-text">Edad:{edad}</p>
    <p className="card-text">Sexo:{sexo}</p>
  </div>
</div>
    </>

);

Estudiante.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    sexo: PropTypes.string
}

Estudiante.defaultProps = {
    nombre: "nombre no asignado",
    edad:0
}

export default Estudiante;
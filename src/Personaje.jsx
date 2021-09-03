import React from 'react';
import PropTypes from 'prop-types';

const Personaje = ({nombre,imagen}) => (
    <>
    <div className="card" style={ {width: '18rem'}}>
    <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <img src="..." className="card-img-top" alt="...">Foto:{imagen}</img>
  </div>
</div>
    </>

);

Personaje.propTypes = {
    nombre: PropTypes.string,
    imagen: PropTypes.string
}

Personaje.defaultProps = {
    nombre: "nombre no asignado",
    imagen: "foto no asignada"
}

export default Personaje;
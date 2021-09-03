import React from 'react';
import Estudiante  from './Estudiante';

const estudiantes =[
    {
        "nombre" : "Camilo",
        "edad": 18,
        "sexo": "M"
    },
    {
        "nombre" : "Andrea",
        "edad": 13,
        "sexo": "F"
    },
    {
        "nombre" : "Juan",
        "edad": 14,
        "sexo": "M"
    },
    {
        "nombre" : "Andres",
        "edad": 15,
        "sexo": "M"
    },
    {
        "nombre" : "Sara",
        "edad": 11,
        "sexo": "F"
    },
    {
        "nombre" : "Sebastian",
        "edad": 16,
        "sexo": "M"
    }
]

const Contenedor = () => (
    <>
    {
        estudiantes.map(c => <Estudiante nombre={c.nombre} edad={c.edad} sexo={c.sexo}/>)
    }
    </>

);

export default Contenedor;
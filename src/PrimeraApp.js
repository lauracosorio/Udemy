import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({saludo}) => {

    return(
        <>
            <h1>{saludo}</h1>
            <h1>Hola Mundo</h1>
            <p>Mi primer aplicación</p>
        </>
    )
}

PrimeraApp.propTypes = {
saludo: PropTypes.string.isRequired
}

export default PrimeraApp
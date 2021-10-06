import React from 'react';
import { useParams } from 'react-router-dom';

const EnviarEstilo = () => {

    const { palabra, fondo, colorLetra } = useParams();

    return (
        <>
        
        {
            typeof colorLetra !== 'undefined' ? (
                <div style={{background: fondo, color: colorLetra, height: '100px', textAlign: 'center'}}>
                    {palabra}
                    {fondo}
                </div>
            ):
            isNaN(palabra) ? 
            ( <h1>La palabra es: {palabra}</h1>  ) :
            ( <h1>El número es: {palabra}</h1>  ) 
        }
        
        </>
    );
}

export default EnviarEstilo;
import React from 'react'
import { Fragment } from 'react';
import styled from '@emotion/styled';
import { TransitionGroup,CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
    background-color: rgba(127, 224, 237, 0.541);
    margin-top: 2rem;
    padding: 1rem;
    text-align:center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    background-color: rgb(127, 224, 237);
    color: #034349;
    padding: 1rem;
    text-transform: uppercase;
    margin:0;
    text-align:center;

`;

interface IResultadoProps {
    resultado: number;
}

export const Resultado= ({resultado}:IResultadoProps) => {

    return(
        (resultado===0) ? <Mensaje>Elige marca, año y tipo de seguro </Mensaje>: 
        <ResultadoCotizacion>
            <TransitionGroup 
                component="p"
                className="resulado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={resultado}
                    timeout={{ enter: 500, exit: 500 }}
                >
                    <TextoCotizacion> Precio: {resultado} €  </TextoCotizacion>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>
    )
    
}

import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import {primeraMayuscula} from '../helper';
import {TransitionGroup, CSSTransition } from 'react-transition-group';

const ResumenContenedor = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

interface datosUsuario {
    marca: string;
    year: string;
    plan: string;
  }

export const Resumen: React.FC <datosUsuario> = ({marca,year, plan}) => {
    if(marca==="" || year==="" || plan==="") {
        return null;
    }
    return (
        <ResumenContenedor>
            <h2>Resumen de cotización:
                <ul>
                    <li>Marca: {primeraMayuscula(marca)}</li>
                    <li>Plan: {primeraMayuscula(plan)}</li>
                    <li>Año: {primeraMayuscula(year)}</li>
                </ul> 
            </h2>
        </ResumenContenedor>
    )
}

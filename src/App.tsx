import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import {Header} from './components/Header';
import {Formulario} from './components/Formulario';
import { useState } from 'react';
import { Resumen } from './components/Resumen';
import { Resultado } from './components/Resultado';
import { Spinner } from './components/Spinner';


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;


interface datosUsuario {
  marca: string;
  year: string;
  plan: string;
}

function App() {

  const [resumen, setResumen ] = useState<datosUsuario>({marca:"", plan:"", year:""});
  const [resultado, setResultado] = useState<number>(0);
  const [cargando, setCargando] = useState<boolean>(false);


  return (
    <Contenedor>
      <Header titulo="Cotizador"/>
      <ContenedorFormulario>
        <Formulario getResumen={setResumen} getResultado={setResultado} carga={setCargando}/>
      </ContenedorFormulario>
      <Resumen marca={resumen.marca} year={resumen.year} plan={resumen.plan} />
      {cargando ? <Spinner/> :
      <Resultado resultado={resultado} /> }
    </Contenedor>
  );
}
export default App;
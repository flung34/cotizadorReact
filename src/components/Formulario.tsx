import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {calcularMarca, getYear, obtenerPlan} from '../helper';

//Functional styles
const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex:0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance:none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;

`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border:none;
    transition: background-color .3s ease-in;
    margin-top: 1rem;

    &:hover {
        cursor: pointer;
        background-color: #26C6DA;

    }
`;

const Error = styled.div`
    background-color:red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align:center;
`;

interface datosUsuario {
    marca: string;
    year: string;
    plan: string;

}

interface IFormularioProps {
    getResumen : (resumen: datosUsuario) => void;
    getResultado : (resultado:number) => void;
    carga: (cargando: boolean)=> void;

}



export const Formulario = ({getResumen, getResultado, carga}: IFormularioProps) => {
    const [datos, setDatos] = useState<datosUsuario>({ marca: "", year:"", plan:""});
    const [error, setError] = useState<boolean>(false);


        
    const {marca, year, plan} = datos;

    const obtenerDatosFormulario = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        // e.preventDefault();
        setDatos({...datos, [e.target.name] : e.target.value })
    }

    useEffect(()=>{
        console.log(datos);
        setError(false);
    }, [datos]);

    const cotizarSeguro = (e:React.FormEvent<HTMLFormElement>) => {
        carga(true);
        e.preventDefault();
        if(marca.trim()==="" || year.trim()==="" || plan.trim()===""){
            setError(true);
            console.log(error);
            return;
        }
        const diferencia = getYear(year);
        let resultado = 2000;
        resultado -= ((diferencia * 3) * resultado) / 100;
        resultado = calcularMarca(marca) * resultado;
        resultado *= obtenerPlan(plan);
        getResumen({marca, plan, year});
        getResultado(resultado);
        setTimeout(()=> {
            carga(false);
        }, 1000);

        return resultado;   
    }

    // //á la françois
    // const [datos, setDatos] = useState<datosUsuario | {}>({});
    // const [marca, setMarca] = useState<string>("");
    // const [year, setYear] = useState<string>("");
    // const [plan, setPlan] = useState<string>("");

    // const cotizarle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
    //     e.preventDefault();
    //     setDatos({marca, year, plan});
    // }

    // useEffect(()=> {
    //     console.log(datos);
    // }, [datos])

    // //fin de à la françois

    return (
        <form onSubmit={(e) => cotizarSeguro(e)}>
            <Campo>
                {error && <Error>Todos los campos son obligatorios</Error>}
                <Label>Marca</Label>
                <Select 
                    // onChange={(e)=>{setMarca(e.target.value)}} 
                    name="marca"
                    value={marca}
                    onChange={e=>obtenerDatosFormulario(e)}
                
                >
                    <option value="">Selecciona origen</option>
                    <option value="americana" >Americana</option>
                    <option value="europea">Europea</option>
                    <option value="asiatica">Asiática</option>
                </Select>
            </Campo>
            <Campo>
            <Label>Año</Label>
            <Select 
                name="year"
                value={year}
                // onChange={(e)=>{setYear(e.target.value)}}
                onChange={e=>obtenerDatosFormulario(e)}
            >
                <option>Selecciona año</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
            </Select>
            </Campo>

            <Campo>
            <InputRadio 
                type="radio" 
                value="completo" 
                name="plan" 
                checked={plan==="completo"}
                // onChange={(e)=>{setPlan("completo")}}
                onChange={e=>obtenerDatosFormulario(e)}
            />Completo
               
            <InputRadio 
                type="radio" 
                value="basico" 
                name="plan" 
                checked={plan==="basico"}
                // onChange={(e)=>{setPlan("basico")}}
                onChange={e=>obtenerDatosFormulario(e)}
            />Básico
            </Campo>
            {/* <button onClick={(e)=>{cotizarle(e)}}>Cotizarle</button> */}
            <Boton type="submit">Cotizar</Boton>
        </form>
    )
}

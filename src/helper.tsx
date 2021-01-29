export function getYear (year:string) {
    return new Date().getFullYear() - parseInt(year);
}

export function calcularMarca(marca:string) : number {
    let incremento=0;

    switch(marca) {
        case 'americana':
            incremento = 1.30;
            break;
        case 'europea':
            incremento = 1.15;
            break;
        case 'asiatica':
            incremento = 1.05;
            break;
    }
    return incremento;
}


export function obtenerPlan(plan:string):number {
    return (plan==='basico') ? 1.20 : 1.50;
}

export function primeraMayuscula ( texto:string ) {
    return texto.charAt(0).toUpperCase()+ texto.slice(1);
}
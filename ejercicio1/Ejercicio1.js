// 1. Objeto básico
const nuestroPrimeritoObjeto = {
    claveComoString: 'valor',
    aquiHayUnNumero: 3000,
    esUnBooleano: true,
    unObjetoAnidado: {
        propiedadAnidada: 'valor anidado'
    }
};

// 2. Shorthand property names
const nombre = 'Fran Quesada';
const escuela = 'Fictizia';
const profesor = { nombre, escuela };

// 3. Mutabilidad de objetos
const objeto = {
    propiedad1: 'Esta es mi propiedad original'
};

objeto.propiedad2 = 'Esta es una propiedad nueva';
objeto.propiedad1 = 'Esta propiedad la modifico';

// 4. Acceso a propiedades
const heroes = {
    dc: ['batman', 'superman'],
    marvel: ['spiderman', 'iron man']
};

const heroesDc = heroes.dc;

// 5. Destructuring
const { dc: heroesDcDestruct } = heroes;

// 6. Destructuring anidado
const dc = {
    heroes: {
        batman: {
            nombre: 'Bruce Wayne'
        },
        superman: {
            nombre: 'Clark Kent'
        }
    }
};

const { heroes: { batman } } = dc;

// 7. Object.freeze()
const objetoParaCongelar = {
    nombre: 'Fran Quesada',
    edad: 26,
};

const objetoCongelado = Object.freeze(objetoParaCongelar);

const nuevoObjeto = {
    ...objetoCongelado,
    localidad: 'Madrid'
};

// Mostrar resultados en la página
const resultadosDiv = document.getElementById('resultados');

resultadosDiv.innerHTML = `
    <div class="objeto-info">
        <h3>Objeto Básico:</h3>
        <pre>${JSON.stringify(nuestroPrimeritoObjeto, null, 2)}</pre>
    </div>
    
    <div class="objeto-info">
        <h3>Profesor (shorthand):</h3>
        <pre>${JSON.stringify(profesor, null, 2)}</pre>
    </div>
    
    <div class="objeto-info">
        <h3>Objeto Mutado:</h3>
        <pre>${JSON.stringify(objeto, null, 2)}</pre>
    </div>
    
    <div class="objeto-info">
        <h3>Héroes DC (destructuring):</h3>
        <pre>${JSON.stringify(heroesDcDestruct, null, 2)}</pre>
    </div>
    
    <div class="objeto-info">
        <h3>Batman (destructuring anidado):</h3>
        <pre>${JSON.stringify(batman, null, 2)}</pre>
    </div>
    
    <div class="objeto-info">
        <h3>Nuevo Objeto (spread operator):</h3>
        <pre>${JSON.stringify(nuevoObjeto, null, 2)}</pre>
    </div>
`;

console.log("Ejercicio 1 completado.");
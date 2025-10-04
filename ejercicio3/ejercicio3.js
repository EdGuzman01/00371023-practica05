const estanteria = {
    libros: [{
        nombre: 'El caballero oscuro',
        autor: 'Frank Miller',
        leido: false
    },
    {
        nombre: 'El mundo amarillo',
        autor: 'Albert Espinosa',
        leido: false,
    },
    {
        nombre: 'Harry Potter y el caliz de fuego',
        autor: 'J.K. Rowling',
        leido: true,
    },
    {
        nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        leido: false
    },
    {
        nombre: 'Berserk',
        autor: 'Kentaro Miura',
        leido: true
    },
    {
        nombre: 'Iliada',
        autor: 'Homero',
        leido: false
    }],
    
    log() {
        const { libros } = this;
        let resultado = '';
        for (const libro of libros) {
            const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
            resultado += `<div class="libro-info">${prefijo} leído "${libro.nombre}" de ${libro.autor}</div>`;
        }
        return resultado;
    },
    
    sugerencia() {
        const librosNoLeidos = this.libros.filter(libro => !libro.leido);
        if (librosNoLeidos.length === 0) {
            return "¡Ya has leído todos los libros!";
        }
        const indiceRandom = Math.floor(librosNoLeidos.length * Math.random());
        const elementoRandom = librosNoLeidos[indiceRandom];
        return `Te sugiero "${elementoRandom.nombre}" de ${elementoRandom.autor}`;
    },
    
    marcarComoLeido(nombreLibro) {
        const libro = this.libros.find(l => l.nombre === nombreLibro);
        if (libro) {
            libro.leido = true;
            actualizarVista();
        }
    }
};

// Mostrar información inicial
function actualizarVista() {
    document.getElementById('estanteria-info').innerHTML = estanteria.log();
}

// Función para mostrar sugerencia
function mostrarSugerencia() {
    document.getElementById('sugerencia').innerHTML = estanteria.sugerencia();
}

// Inicializar vista
actualizarVista();

console.log("Estantería:", estanteria);
console.log("--- LOG ---");
estanteria.libros.forEach(libro => {
    const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
    console.log(`${prefijo} leído "${libro.nombre}" de ${libro.autor}`);
});
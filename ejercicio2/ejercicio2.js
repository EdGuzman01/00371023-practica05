const carrito = {
    productos: [{
        nombre: 'papel higiénico',
        unidades: 4,
        precio: 5,
    },
    {
        nombre: 'chocolate',
        unidades: 2,
        precio: 1.5
    },
    {
        nombre: 'leche',
        unidades: 3,
        precio: 2.2
    }],
    
    get precioTotal() {
        let precio = 0;
        for (let i = 0; i < this.productos.length; i++) {
            precio += this.productos[i].unidades * this.productos[i].precio;
        }
        return precio;
    },
    
    agregarProducto(nombre, unidades, precio) {
        this.productos.push({ nombre, unidades, precio });
    },
    
    mostrarCarrito() {
        let html = '<h3>Productos en el carrito:</h3><ul>';
        
        this.productos.forEach(producto => {
            html += `<li>${producto.nombre} - ${producto.unidades} x $${producto.precio} = $${producto.unidades * producto.precio}</li>`;
        });
        
        html += `</ul><h3>Total: $${this.precioTotal.toFixed(2)}</h3>`;
        return html;
    }
};

// Probar funcionalidades
carrito.agregarProducto('café', 1, 8.5);

// Mostrar en la página
document.getElementById('carrito-info').innerHTML = carrito.mostrarCarrito();

console.log("Carrito:", carrito);
console.log("Precio total:", carrito.precioTotal);
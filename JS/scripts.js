function agregarAlCarrito(idProducto) {
    // Obtener el elemento de la tarjeta correspondiente
    var tarjeta = document.getElementById(idProducto);

    // Obtener los valores de los atributos personalizados
    var nombre = tarjeta.getAttribute('data-nombre');
    var precio = tarjeta.getAttribute('data-precio');

    // Agregar el producto al carrito
    agregarProductoAlCarrito(nombre, precio);
}

function agregarProductoAlCarrito(nombre, precio) {
    // Crear una nueva fila para el producto
    var fila = document.createElement('tr');

    // Agregar el nombre del producto a la fila
    var celdaNombre = document.createElement('td');
    celdaNombre.textContent = nombre;
    fila.appendChild(celdaNombre);

    // Agregar el precio del producto a la fila
    var celdaPrecio = document.createElement('td');
    celdaPrecio.textContent = precio;
    fila.appendChild(celdaPrecio);

    // Agregar un botón para eliminar el producto del carrito
    var celdaEliminar = document.createElement('td');
    var botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function () {
        fila.parentNode.removeChild(fila);
    });
    celdaEliminar.appendChild(botonEliminar);
    fila.appendChild(celdaEliminar);

    // Agregar la fila a la tabla
    var tabla = document.getElementById('carrito');
    var cuerpoTabla = tabla.querySelector('tbody');
    cuerpoTabla.appendChild(fila);
}


// filtro

function filtrarProductos() {
    var filtro = document.getElementById('filtro').value.toLowerCase();
    var productos = document.querySelectorAll('.producto');

    productos.forEach(function (producto) {
        var nombre = producto.querySelector('.nombre').textContent.toLowerCase();
        var descripcion = producto.querySelector('.descripcion').textContent.toLowerCase();

        if (nombre.indexOf(filtro) > -1 || descripcion.indexOf(filtro) > -1) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

var campoFiltro = document.getElementById('filtro');
campoFiltro.addEventListener('input', filtrarProductos);


///filtro2

// Seleccionar el botón de filtro y el campo de texto
var btnFiltro = document.getElementById('btn-filtro');
var inputFiltro = document.getElementById('input-filtro');

// Agregar un manejador de eventos click al botón de filtro
btnFiltro.addEventListener('click', function () {
    // Obtener el valor ingresado en el campo de texto
    var filtro = inputFiltro.value.toLowerCase();

    // Filtrar los productos que contienen el valor ingresado
    var productosFiltrados = productos.filter(function (producto) {
        return producto.nombre.toLowerCase().indexOf(filtro) !== -1;
    });

    // Mostrar los productos filtrados
    mostrarProductos(productosFiltrados);
});

function mostrarProductos(productos) {
    // Seleccionar la tabla y su cuerpo
    var tabla = document.getElementById('tabla-productos');
    var tbody = tabla.getElementsByTagName('tbody')[0];

    // Limpiar el cuerpo de la tabla
    tbody.innerHTML = '';

    // Agregar cada producto al cuerpo de la tabla
    productos.forEach(function (producto) {
        var fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
        `;
        tbody.appendChild(fila);
    });
}

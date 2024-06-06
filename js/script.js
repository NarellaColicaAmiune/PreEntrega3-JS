// lista de productos
let productos = [
    { 
        id: 1230-9815, 
        img: '../multimedia/naranja grande.jpg',
        nombre: 'Mermelada de naranja',
        descripcion: 'Mermeladada de naranja agroecológica con azúcar común. Elaborada por "La Morocha"', 
        precio: 2800 
    },
    { 
        id: 1231-9816,
        img: '../multimedia/naranja y maracuya grande.jpg', 
        nombre: 'Mermelada de naranja con maracuyá',
        descripcion: 'Mermeladada de naranja con maracuyá agroecológicas con azúcar común. Elaborada por "La Morocha"', 
        precio: 2800 
    },
    { 
        id: 1232-9817,
        img: '../multimedia/moras grande.jpg', 
        nombre: 'Mermelada de moras',
        descripcion: 'Mermeladada de moras agroecológicas con azúcar común. Elaborada por "La Morocha"', 
        precio: 2800 
    },
    { 
        id: 1234-9819,
        img: '../multimedia/ciruela grande.jpg', 
        nombre: 'Mermelada de ciruela',
        descripcion: 'Mermeladada de ciruela agroecológica con azúcar común. Elaborada por "La Morocha"', 
        precio: 2800 
    },
    { 
        id: 1235-9820,
        img: '../multimedia/DSC_0081 este.JPG', 
        nombre: 'Mermelada de durazno',
        descripcion: 'Mermeladada de durazno en trozos agroecológico con azúcar común. Elaborada por "La Morocha"', 
        precio: 2800 
    },
    { 
        id: 1236-9821,
        img: '../multimedia/damasco grande.jpg', 
        nombre: 'Mermelada de damasco',
        descripcion: 'Mermeladada de damasco agroecológico con azúcar común. Elaborada por "La Morocha"', 
        precio: 2800 
    },
    { 
        id: 1237-9822,
        img: '../multimedia/ciruela y durazno grande.jpg', 
        nombre: 'Mermelada de durazno con ciruela',
        descripcion: 'Mermeladada de durazno con ciruela agroecológicas con azúcar común. Elaborada por "La Morocha"', 
        precio: 2800 
    },
    { 
        id: 1238-9823,
        img: '../multimedia/membrillo grande.jpg', 
        nombre: 'Mermelada de membrillo',
        descripcion: 'Mermeladada de membrillo agroecológico con azúcar común. Elaborada por "La Morocha"', 
        precio: 2800 
    },
    { 
        id: 1239-9824,
        img: '../multimedia/uvas en almibar grande.jpg', 
        nombre: 'Uvas en almíbar',
        descripcion: 'Uvas enteras agroecológicas en almíbar con azúcar común. Elaborada por "La Morocha"', 
        precio: 2800 
    },
    { 
        id: 1240-9825,
        img: '../multimedia/membrillos en almibar grande.jpg', 
        nombre: 'Membrillos en almíbar',
        descripcion: 'Membrillos en trozos agroecológicos en almíbar con azúcar común. Elaborada por "La Morocha"', 
        precio: 4200 
    },
    { 
        id: 1241-9826,
        img: '../multimedia/aji molido.jpg', 
        nombre: 'Ají molido',
        descripcion: 'Ají molido agroecológico. Elaborado por "La Morocha"', 
        precio: 800 
    },
    { 
        id: 1242-9827,
        img: "../multimedia/comino.jpg", 
        nombre: 'Comino', 
        descripcion: 'Comino agroecológico. Elaborado por "La Morocha"',
        precio: 800 
    },
    { 
        id: 1243-9828,
        img: "../multimedia/pimenton.jpg", 
        nombre: 'Pimentón dulce',
        descripcion: 'Pimentón dulce agroecológico. Elaborado por "La Morocha"', 
        precio: 800 
    },
    { 
        id: 1244-9829,
        img: '../multimedia/cedron.jpg', 
        nombre: 'Cedrón',
        descripcion: 'Cedrón agroecológico secado al natural. Elaborado por "La Morocha"', 
        precio: 800 
    },
    { 
        id: 1245-9830,
        img: '../multimedia/yerbabuena y menta.jpg', 
        nombre: 'Yerbabuena y Menta',
        descripcion: 'Yerbabuena y menta agroecológicas secadas al natural. Elaboradas por "La Morocha"', 
        precio: 800 
    },
    { 
        id: 1246-9831,
        img: '../multimedia/cola de caballo.jpg', 
        nombre: 'Cola de Caballo',
        descripcion: 'Cola de caballo agroecológica secada al natural. Elaborada por "La Morocha"', 
        precio: 800 
    },
    { 
        id: 1247-9832,
        img: '../multimedia/poleo.jpg', 
        nombre: 'Poleo',
        descripcion: 'Poleo agroecológico secado al natural. Elaborado por "La Morocha"', 
        precio: 800 
    },
    { 
        id: 1248-9833,
        img: '../multimedia/burro.jpg', 
        nombre: 'Burro',
        descripcion: 'Burro agroecológico secado al natural. Elaborado por "La Morocha"', 
        precio: 800 
    },
    { 
        id: 1249-9834,
        img: '../multimedia/mix matero.jpg', 
        nombre: 'Mix matero',
        descripcion: 'Mix matero agroecológicos secados al natural. Contiene cedrón, poleo, burro, yerbabuena y menta. Elaborado por "La Morocha"', 
        precio: 800 
    },
    { 
        id: 1250-9835,
        img: '../multimedia/oregano.jpg', 
        nombre: 'Orégano',
        descripcion: 'Orégano agroecológico secado al natural. Elaborado por "La Morocha"', 
        precio: 800 
    },
    { 
        id: 1251-9836,
        img: '../multimedia/llanten.jpg', 
        nombre: 'Llantén', 
        descripcion: 'Llantén agroecológico secado al natural. Elaborado por "La Morocha"',
        precio: 800 
    },
    { 
        id: 1252-9837,
        img: "../multimedia/romero.jpg", 
        nombre: 'Romero', 
        descripcion: 'Romero agroecológico secado al natural. Elaborado por "La Morocha"',
        precio: 800 
    },
    { 
        id: 1253-9838,
        img: '../multimedia/laurel.jpg', 
        nombre: 'Hojas de laurel',
        descripcion: 'Hojas de laurel agroecológicas secadas al natural. Elaboradas por "La Morocha"', 
        precio: 800 
    },
    { 
        id: 1254-9839,
        img: '../multimedia/mix condimentos.jpg', 
        nombre: 'Mix de condimentos',
        descripcion: 'Mix de condimentos agroecológicos secados al natural. Contiene orégano, laurel triturado y romero. Elaborado por "La Morocha"', 
        precio: 800 
    },
    { 
        id: 1255-9840,
        img: "../multimedia/walnut-6757529_1280.jpg", 
        nombre: 'Nueces por kilo',
        descripcion: 'Nueces agroecológicas', 
        precio: 9200 
    },
    { 
        id: 1256-9841,
        img: "../multimedia/almonds-1571810_1280.jpg", 
        nombre: 'Almendras por kilo',
        descripcion: 'Almendras agroecológicas', 
        precio: 12000 
    },
    { 
        id: 1257-9842,
        img: "../multimedia/figs-6713310_1280.jpg", 
        nombre: 'Pasas de higos por kilo',
        descripcion: 'Pasas de higos agroecológicas', 
        precio: 4500 
    },
    { 
        id: 1258-9843,
        img: "../multimedia/pexels-freestockpro-12945019.jpg", 
        nombre: 'Pasas de ciruela por kilo',
        descripcion: 'Pasas de ciruela agroecológicas', 
        precio: 4000 
    },
    { 
        id: 1259-9844,
        img: "../multimedia/food-624603_1280.jpg", 
        nombre: 'Pasas de uva por kilo',
        descripcion: 'Pasas de uva agroecológicas', 
        precio: 6000 
    }
];

// Recuperar el carrito desde localStorage y convertirlo a un array
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Recuperar el total de la compra desde localStorage y convertirlo a un número decimal
let totalCompra = parseFloat(localStorage.getItem('totalCompra')) || 0;

function mostrarProductos() {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';
    productos.forEach(({ img, nombre, descripcion, precio }, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('product');
        productoDiv.innerHTML = `
            <img src="${img}" alt="${nombre}">
            <h2 class="product-nombre">${nombre}</h2>
            <p>${descripcion}</p>
            <p><strong>$${precio}</strong></p>
            <input type="number" id="cantidad${index}" placeholder="Cantidad" min="1">
            <button onclick="agregarCarrito(${index})">Agregar al Carrito</button>
        `;
        productosDiv.appendChild(productoDiv);
    });
}

function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    carrito.forEach(({ nombre, precio, cantidad, subTotal }, index) => {
        const carritoItemDiv = document.createElement('div');
        carritoItemDiv.classList.add('cart-item');
        carritoItemDiv.innerHTML = `
            <p>Producto: ${nombre}</p>
            <p>Precio: $${precio}</p>
            <p>Cantidad: ${cantidad}</p>
            <p>Subtotal: $${subTotal}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoDiv.appendChild(carritoItemDiv);
    });
    document.getElementById('total').innerText = `Total: $${totalCompra}`;
}


function agregarCarrito(index) {
    const cantidadInput = document.getElementById(`cantidad${index}`);
    const cantidad = parseInt(cantidadInput.value);
    if (isNaN(cantidad) || cantidad <= 0) {
        return;
    }
    
    const { nombre, precio } = productos[index];
    const subTotal = precio * cantidad;
    
    carrito = [...carrito, { nombre, precio, cantidad, subTotal }];
    totalCompra += subTotal;

    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('totalCompra', totalCompra.toString());

    mostrarCarrito();

    Toastify({
        text: `${nombre} agregado al carrito`,
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
}


function eliminarDelCarrito(index) {
    totalCompra -= carrito[index].subTotal;

    carrito = [...carrito.slice(0, index), ...carrito.slice(index + 1)];

    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('totalCompra', totalCompra.toString());

    mostrarCarrito();
}

function finalizarCompra() {
    if (carrito.length === 0) {
        return;
    }

    // Mensaje de WhatsApp con los detalles del carrito y el total
    let mensaje = 'Hola, me gustaría realizar la siguiente compra:\n\n';
    carrito.forEach(({ nombre, cantidad, subTotal }) => {
        mensaje += `Producto: ${nombre}\nCantidad: ${cantidad}\nSubtotal: $${subTotal}\n\n`;
    });
    mensaje += `Total: $${totalCompra}\n\n`;
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Redirigir a WhatsApp
    const numeroTelefono = '+543835402508';
    const url = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
    window.location.href = url;

    // Vaciar carrito y total
    vaciarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    totalCompra = 0;
    localStorage.removeItem('carrito');
    localStorage.removeItem('totalCompra');
    mostrarCarrito();

    Toastify({
        text: "Se ha vaciado el carrito",
        className: "info",
        style: {
            background: "linear-gradient(to right, #c41212, #c9833d)",
        }
    }).showToast();
}

document.getElementById('finalizarCompra').addEventListener('click', finalizarCompra);
document.getElementById('vaciarCarrito').addEventListener('click', vaciarCarrito);

// Inicializar
mostrarProductos();
mostrarCarrito();

const contenedorCarrito = document.getElementById("contenedorCarrito");

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}
    const mostrarCarrito = () => {
        contenedorCarrito.innerHTML = "";
            carrito.forEach(producto => {
            const card = document.createElement("div");
            card.classList.add("col-xl-5", "col-md-6", "col-sm-12");
            card.innerHTML = `
                            <div>
                                <div class="card-body row">
                                    <img src= " ${producto.img}" class="card-img-top">
                                    <h5 class="card-title"> Nombre: ${producto.nombre} </h5>
                                    <p class="card-text"> Marca: ${producto.marca}</p>
                                    <p class="card-text"> Precio: ${producto.precio}</p>
                                    <p class="card-text"> Cantidad: ${producto.cantidad}</p>
                                    <button class="btn btn-dark m-3 w-25" id="sumar${producto.id}"> + </button>
                                    <button class="btn btn-dark m-3 w-25" id="restar${producto.id}"> - </button>
                                    
                                </div>
                            </div>`
            contenedorCarrito.appendChild(card);
    // <button class="btn btn-dark" id="eliminar${producto.id}"> Eliminar del carrito </button>
            // const boton = document.getElementById(`eliminar${producto.id}`);
            // boton.addEventListener("click", () => {
            //     eliminarDelCarrito(producto.id);
            // })

            const botonSuma = document.getElementById(`sumar${producto.id}`);
            botonSuma.addEventListener("click", () => {
                sumarProducto(producto.id);
            })
            const botonResta = document.getElementById(`restar${producto.id}`);
            botonResta.addEventListener("click", () => {
                restarProducto(producto.id);
            })
        })
    }

mostrarCarrito();

const sumarProducto = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    producto.cantidad = producto.cantidad + 1
    calcularTotal();
    mostrarCarrito();
    localStorage.setItem ("carrito", JSON.stringify(carrito))
}

const restarProducto = (id) =>{
    const producto = carrito.find (producto => producto.id === id);
    if (producto.cantidad > 1){
        producto.cantidad = producto.cantidad - 1;
    } else {
const indice = carrito.indexOf(producto);
carrito.splice (indice, 1);
    }
    calcularTotal();
    mostrarCarrito();
    localStorage.setItem ("carrito", JSON.stringify(carrito))
}
// const eliminarDelCarrito = (id) => {
//     const producto = carrito.find(producto => producto.id === id);
//     if (producto.cantidad > 1){
//         producto.cantidad = producto.cantidad - 1;
//     } else {
//         const indice = carrito.indexOf(producto);
//     carrito.splice(indice, 1);
//     }
//     calcularTotal();
//     mostrarCarrito();
//     localStorage.setItem ("carrito", JSON.stringify(carrito))
// }

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0; 
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `$ ${totalCompra}` 
}
calcularTotal();
const eliminarTodoElCarrito = () => {
    carrito = [];   
    mostrarCarrito();
    localStorage.clear();
}
const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
    calcularTotal();
});

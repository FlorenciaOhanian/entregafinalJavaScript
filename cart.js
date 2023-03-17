const contenedorCarrito = document.getElementById("contendorCarrito");

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
                                    <p class="card-text"> Precio: ${producto.cantidad}</p>
                                    <button class="btn btn-dark" id="eliminar${producto.id}"> Eliminar del carrito ></button>
                                </div>
                            </div>`
            contenedorTenedores.appendChild(card);
    
            const boton = document.getElementById(`eliminar${producto.id}`);
            boton.addEventListener("click", () => {
                eliminarDelCarrito(producto.id);
            })
        })
        calcularTotal();
    }



const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
    localStorage.setItem ("carrito", JSON.stringify("carrito"))
}

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0; 
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `El total de su compra es $: ${totalCompra}`
}

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();

})

const eliminarTodoElCarrito = () => {
    carrito = [];   
    mostrarCarrito();
    localStorage.clear();
}

function recuperoValores (carrito) {
    

}


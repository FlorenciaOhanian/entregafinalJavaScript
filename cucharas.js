class producto {
    constructor(id, nombre, marca, precio, img, unidades) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.img = img;
        this.unidades = unidades;
        this.cantidad = 1;
    }
}
const cuchara1 = new producto("salerno", "Nombre: Salerno", "Marca: Pulsiva", "Precio: $ 25.000", "../img/cuchara1.jpg", "12 pz.")
const cuchara2 = new producto("torino", "Nombre: Torino", "Marca: Vega", "Precio: $ 40.000", "../img/cuchara2.jpg", "12 pz.")
const cuchara3 = new producto("positano", "Nombre: Positano", "Marca: Pulsiva", "Precio: $ 30.000", "../img/cuchara3.jpg", "12 pz.")
const cuchara4 = new producto("florencia", "Nombre: Florencia", "Marca: Pulsiva", "Precio: $ 45.000", "../img/cuchara4.jpg", "12 pz.")
const cuchara5 = new producto("roma", "Nombre: Roma", "Marca: Vega", "Precio: $ 18000", "../img/cuchara5.jpg", "12 pz.")

const productosCucharas = [cuchara1, cuchara2, cuchara3, cuchara4, cuchara5]

let carrito = [];

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}
const contenedorCucharas = document.getElementById("contenedorCucharas");

const mostrarProductos = () => {
    productosCucharas.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-5", "col-md-6", "col-sm-12");
        card.innerHTML = `
                        <div>
                            
                            <div class="card-body">
                                <img src= " ${producto.img}" class="card-img-top">
                                <h5 class="card-title"> ${producto.nombre} </h5>
                                <p class="card-text"> ${producto.marca}</p>
                                <p class="card-text"> ${producto.precio}</p>
                                <p class="btn btn-dark"> Agregar a carrito </p>
                            </div>`
        contenedorCucharas.appendChild(card);
        
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();

const agregarAlCarrito = (id) => {
    const productoCargado = carrito.find(producto => producto.id === id);
    if (productoCargado) {
        productoCargado.cantidad++;
    } else {
        const producto = productosCucharas.find(producto => producto.id === id);
        carrito.push(producto);
    }
}

const contendorCarrito = document.getElementById("contenedorCarrito")
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

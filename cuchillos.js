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

const cuchillo1 = new producto("liverpool", "Nombre: Liverpool", "Marca: Vega", "Precio: 23000", "../img/cuchillo1.jpg", "12 pz.")
const cuchillo2 = new producto("oslo", "Nombre: Oslo", "Marca: vega", "Precio: 35000", "../img/cuchillo2.jpg", "12 pz.")
const cuchillo3 = new producto("berlin", "Nombre: Berlin", "Marca: Pulsiva", "Precio: 40000", "../img/cuchillo3.jpg", "12 pz.")
const cuchillo4 = new producto("colonia", "Nombre: Colonia", "Marca: Vega", "Precio: 48000", "../img/cuchillo4.jpg", "12 pz.")
const cuchillo5 = new producto("barcelona", "Nombre: Barcelona", "Marca: Vega", "Precio: 23000", "../img/cuchillo5.jpg", "12 pz.")

const productosCuchillos = [cuchillo1, cuchillo2, cuchillo3, cuchillo4, cuchillo5]

let carrito = [];

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorCuchillos = document.getElementById("contenedorTenedores");

const mostrarProductos = () => {
    productosCuchillos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-5", "col-md-6", "col-sm-12");
        card.innerHTML = `
                        <div>
                            <div class="card-body row">
                                <img src= " ${producto.img}" class="card-img-top">
                                <h5 class="card-title"> Nombre: ${producto.nombre} </h5>
                                <p class="card-text"> Marca: ${producto.marca}</p>
                                <p class="card-text"> Precio: ${producto.precio}</p>
                                <button class="btn btn-dark" id="boton${producto.id}"> Agregar al carrito </button>
                            </div>
                        </div>`
        contenedorCuchillos.appendChild(card);

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
        const producto = productosCuchillos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const contendorCarrito = document.getElementById("contenedorCarrito")
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

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
const cuchara1 = new producto("salerno", "Salerno",  "Pulsiva", 25000, "../img/cuchara1.jpg", "12 pz.")
const cuchara2 = new producto("torino", "Torino",  "Vega", 40000, "../img/cuchara2.jpg", "6 pz.")
const cuchara3 = new producto("positano", "Positano",  "Pulsiva", 30000, "../img/cuchara3.jpg", "12 pz.")
const cuchara4 = new producto("florencia", "Florencia",  "Pulsiva", 45000, "../img/cuchara4.jpg", "6 pz.")
const cuchara5 = new producto("roma", "Roma",  "Vega", 18000,"../img/cuchara5.jpg", "12 pz.")

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
                                <h5 class="card-title"> Nombre: ${producto.nombre} </h5>
                                <p class="card-text"> Marca: ${producto.marca}</p>
                                <p class="card-text"> Unidades: ${producto.unidades}</p>
                                <p class="card-text"> Precio: ${producto.precio}</p>
                                <p class="btn btn-dark" id="boton${producto.id}"> Agregar a carrito </p>
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
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


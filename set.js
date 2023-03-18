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

const set1 = new producto("siena",  "Siena", "Vega",  100000, "../img/set1.jpg", "12 pz.")
const set2 = new producto("verona",  "Verona",  "Pulsiva", 120000, "../img/set2.jpg", "12 pz.")
const set3 = new producto("venecia",  "Venecia",  "Vega", 135000, "../img/set3.jpg", "12 pz.")
const set4 = new producto("catania",  "Catania",  "Vega", 115000, "../img/set4.jpg", "12 pz.")
const set5 = new producto("taormina",  "Taormina",  "Pulsiva", 138000, "../img/set5.jpg", "12 pz.")

const productosSet = [set1, set2, set3, set4, set5]

let carrito = [];
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorSet = document.getElementById("contenedorSet");

const mostrarProductos = () => {
    productosSet.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-5", "col-md-6", "col-sm-12");
        card.innerHTML = `
                        <div>
                            <div class="card-body">
                                                    <img src= " ${producto.img}" class="card-img-top">
                                                    <h5 class="card-title"> Nombre: ${producto.nombre} </h5>
                                                    <p class="card-text"> Marca: ${producto.marca}</p>
                                                    <p class="card-text"> Precio: $ ${producto.precio}</p>
                                                    <p class="btn btn-dark" id="boton${producto.id}"> Agregar a carrito </p>
                            </div>`
        contenedorSet.appendChild(card);

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
        const producto = productosSet.find(producto => producto.id === id);
        carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const contendorCarrito = document.getElementById("contenedorCarrito")
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

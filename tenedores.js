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
const tenedor1 = new producto("estocolmo", "Estocolmo", "Vega", 16000, "../img/tenedor1.jpg", "12 pz.")
const tenedor2 = new producto("paris", "Paris", "Vega", 40000, "../img/tenedor2.jpg", "12 pz.")
const tenedor3 = new producto("madrid", "Madrid", "Vega", 18000, "../img/tenedor3.jpg", "6 pz.")
const tenedor4 = new producto("londres", "Londres", "Vega", 28000, "../img/tenedor4.jpg", "6 pz.")
const tenedor5 = new producto("sydney", "Sydney", "Pulsiva", 16000, "../img/tenedor5.jpg", "12 pz.")

const productosTenedores = [tenedor1, tenedor2, tenedor3, tenedor4, tenedor5]

let carrito = [];
console.log("carrito afuera: ", carrito)
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
console.log("carrito adentro: ", carrito)

}

const contenedorTenedores = document.getElementById("contenedorTenedores");

const mostrarProductos = () => {
    productosTenedores.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-5", "col-md-6", "col-sm-12");
        card.innerHTML = `
                        <div>
                            <div class="card-body row">
                                <img src= " ${producto.img}" class="card-img-top">
                                <h5 class="card-title"> Nombre: ${producto.nombre} </h5>
                                <p class="card-text"> Marca: ${producto.marca}</p>
                                <p class="card-text"> Unidades: ${producto.unidades}</p>
                                <p class="card-text"> Precio: ${producto.precio}</p>
                                <button class="btn btn-dark" id="boton${producto.id}"> Agregar al carrito</button>
                            </div>
                        </div>`
        contenedorTenedores.appendChild(card);

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
        const producto = productosTenedores.find(producto => producto.id === id);
        carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


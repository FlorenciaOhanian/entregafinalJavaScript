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
const tenedor1 = new producto("estocolmo", "Nombre: Estocolmo", "Marca: Vega", "tenedor", "Precio: $ 16000", "../img/tenedor1.jpg", "12 pz.")
const tenedor2 = new producto("paris", "Nombre:Paris", "Marca: Vega",  "Precio: $ 40000", "img/tenedor2.jpg", "12 pz.")
const tenedor3 = new producto("madrid", "Nombre: Madrid", "Marca: Vega", "Precio: $ 18000", "img/tenedor3.jpg", "12 pz.")
const tenedor4 = new producto("londres", "Nombre: Londres", "Marca: Vega", "Precio: $ 28000", "img/tenedor4.jpg", "12 pz.")
const tenedor5 = new producto("sydney", "Nombre: Sydney", "Marca: Pulsiva", "Precio: $ 16000", "img/tenedor5.jpg", "12 pz.")

const productosTenedores = [tenedor1, tenedor2, tenedor3, tenedor4, tenedor5]

let carrito = [];

const contenedorTenedores = document.getElementById("contenedorTenedores");

const mostrarProductos = () => {
    productosTenedores.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-5", "col-md-6", "col-sm-12");
        card.innerHTML = `
                        <div>
                            <img src= " ${producto.img}" class="card-img-top imgProducto">
                            <div class="card-body row">
                                <h5 class="card-title"> ${producto.nombre} </h5>
                                <p class="card-text"> ${producto.marca}</p>
                                <p class="card-text"> ${producto.precio}</p>
                                <p class="btn btn-dark"> Agregar a carrito </p>
                            </div>`
        contenedorTenedores.appendChild(card);
    })
}

mostrarProductos();
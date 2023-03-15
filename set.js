class producto {
    constructor(id, nombre, marca, tipo, precio, img, unidades) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.tipo = tipo;
        this.precio = precio;
        this.img = img;
        this.unidades = unidades;
        this.cantidad = 1;
    }
}

const set1 = new producto("siena", "Nombre: Siena", "Marca: Vega", "Precio: 100000", "img/set1.jpg", "12 pz.")
const set2 = new producto("verona", "Nombre: Verona", "Marca: Pulsiva",  "Precio: 120000", "img/set2.jpg", "12 pz.")
const set3 = new producto("venecia", "Nombre: Venecia", "Marca: Vega",  "Precio: 135000", "img/set3.jpg", "12 pz.")
const set4 = new producto("catania", "Nombre: Catania", "Marca: Vega",  "Precio: 115000", "img/set4.jpg", "12 pz.")
const set5 = new producto("taormina", "Nombre: Taormina", "Marca: Pulsiva", "Precio: 138000", "img/set5.jpg", "12 pz.")

const productosSet = [ set1, set2, set3, set4, set5]

let carrito = [];

const contenedorSet = document.getElementById("contenedorSet");

const mostrarProductos = () => {
    productosSet.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-5", "col-md-6", "col-sm-12");
        card.innerHTML = `
                        <div>
                            <img src= " ${producto.img}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title"> ${producto.nombre} </h5>
                                <p class="card-text"> ${producto.marca}</p>
                                <p class="card-text"> ${producto.precio}</p>
                                <p class="btn btn-dark"> Agregar a carrito </p>
                            </div>`
        contenedorSet.appendChild(card);
    })
}

mostrarProductos();